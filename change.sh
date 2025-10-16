git filter-branch --env-filter '
CORRECT_NAME="matheus-silveira7714"
CORRECT_EMAIL="pioneerai89297@gmail.com"

export GIT_AUTHOR_NAME="$CORRECT_NAME"
export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
' --tag-name-filter cat -- --branches --tags
