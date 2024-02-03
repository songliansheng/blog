# SetUp
Update system in Ubuntu
```bash
sudo apt update
```
# Environment Variable
### Create、export an session variable
```bash
export NAME=VALUE
```
 &nbsp;&nbsp;&nbsp; When an environment variable is set from the shell using the export command, its existence ends when the user’s sessions ends(**Session Variable**)
### Persisting Environment Variables for a User
```bash
echo 'export NAME=VALUE' | sudo tee -a ~/.bashrc
```
### Persisting Global Environment Variables for All Users
```bash
echo 'export NAME=VALUE' | sudo tee -a /etc/environment
```
or
```bash
echo 'export NAME=VALUE' | sudo tee -a /etc/profile
```
### Delete an Environment Variable
```bash
unset <Variable-Name>
```
### List Environment Variables
```bash
printenv <Variable-Name1> <Variable-Name2>
```
or
```bash
echo $<Variable-Name1>
```
### List **all** Environment Variables
```bash
printenv
```
# Managing File/folder
### Move a file
```bash
mv <src-file> <dest-folder>
```
### Create a file
```bash
cat > <file-path>
```
### Change the owner of a file
```bash
chown <User-Name> <File-Path>
```
### Download a File from Remote Server
```bash
scp user@server:<File-Path> <Local-Path-To-Save> -P 80
```

# Network

Disable Ipv6
```bash
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
```
```bash
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
```
```bash
sudo sysctl -w net.ipv6.conf.lo.disable_ipv6=1
```

Ping test
```bash
ping registry.npmjs.org
```
```bash
ping -4 registry.npmjs.org # does IPv4 connect?
```
```bash
ping -6 registry.npmjs.org # does IPv6 connect?
```
