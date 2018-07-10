@echo off
git add -A
git commit -a --amend -m "~"
git push --set-upstream origin master -f