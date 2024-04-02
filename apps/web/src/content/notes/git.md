### Match(link) a remote to a local repo
```bash
git remote add <alias-for-remote-repo> <remote-url>
```
**Verify** new remote
```bash
git remote -v
```
**Changing** a remote repository's URL
```bash
git remote set-url <alias-for-remote-repo> <new-remote-url>
```
### Updates remote refs using local refs

# git pull
```bash
git pull <remote-repo> <remote-branch>
```
```bash
git pull <remote-repo> <remote-branch> --rebase
```


# TroubleShooting
## fatal: detected dubious ownership in repository at ...

```bash
git config --global --add safe.directory '*'
```
## There is no tracking information for the current branch


