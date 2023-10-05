#!//usr/bin/env bash

REPOROOT=$(git rev-parse --show-toplevel)
TEMPLATEDIR=$REPOROOT/.github/template
TEMPLATECONFIG=$TEMPLATEDIR/gitconfig
TEMPLATELABEL=$(git config -f $TEMPLATECONFIG template.issue-label)
TEMPLATEREPO=$(git config -f $TEMPLATECONFIG template.repo)
TEMPLATEISSUES=$TEMPLATEDIR/issues.json 
TMPFILE=$TEMPLATEDIR/body.tmp
CLEANUP=

cd $REPOROOT

 if [ -e $TEMPLATEISSUES ] 
 then
    echo "Using cached issues"
 else
   gh issue list --label $TEMPLATELABEL -R $TEMPLATEREPO --json 'title,body' > $TEMPLATEISSUES
   CLEANUP="rm $TEMPLATEISSUES"
 fi

for row in $(cat $TEMPLATEISSUES | jq -r '.[] | @base64'); do
    _jq() { 
     echo ${row} | base64 --decode | jq -r ${1}
    }
   TITLE=$(_jq '.title' | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
   
   if gh issue list | grep -e ".*$TITLE.*" >/dev/null ; then
     echo "Issue already exitst: ($TITLE)"
   else
     echo Copying issue: \'$TITLE\'
     echo $(_jq '.body') > $TMPFILE
     cmd="gh issue create --title \"$(_jq '.title')\" --body-file $TMPFILE"
     eval $cmd
     rm $TMPFILE
   fi

done

eval $CLEANUP