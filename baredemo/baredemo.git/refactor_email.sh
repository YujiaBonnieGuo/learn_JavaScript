#!/bin/bash
git filter-branch --env-filter '
OLD_EMAIL="bonnie_guo@manulife.com"
CORRECT_NAME="bonnieguo"
CORRECT_EMAIL="bonnieguo1994@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_AUTHOR_NAME="$CORRECT_NAME"
export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi' --tag-name-filter cat -- --branches --tags