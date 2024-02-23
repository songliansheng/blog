# Caddy Notes
Pluto is a dwarf planet in the Kuiper belt.

## Contents

## Install caddy
```bash
dnf install 'dnf-command(copr)'  -y
```
```bash
dnf copr enable @caddy/caddy  -y
```
```bash
dnf install caddy -y
```
## Start caddy
```bash
caddy run
```
## Editing configuration
By default, Caddy's configuration ("config") is blank.
Either of the following commands can be used.
```bash
caddy adapt --config  etc/caddy/caddy.json
```
```bash
caddy run --config /etc/caddy/Caddyfile
```
## Stop caddy
ctrl+c
## Reload config file
```bash
caddy reload
```
## Uninstall caddy
```bash
sudo rm /etc/apt/sources.list.d/caddy-stable.list
```
```bash
sudo apt remove caddy
```