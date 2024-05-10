# DNS configuration
```
sudo rm /etc/resolv.conf
```
```
sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
```
```
sudo bash -c 'echo "[boot]" > /etc/wsl.conf'
```
```
sudo bash -c 'echo "systemd=true" >> /etc/wsl.conf'
```
```
sudo bash -c 'echo "[network]" >> /etc/wsl.conf'
```
```
sudo bash -c 'echo "generateResolvConf = false" >> /etc/wsl.conf'
```
```
sudo chattr +i /etc/resolv.conf
```

# Trouble shooting
## DNS & npm issues in Wsl2
Wsl in **NAT** mode + Ipv6/Ipv4 enabled in Win11 -> npm(✅)

Wsl in **mirrored** mode + Ipv6 enabled in Win11 -> pnpm(✅)

~~Wsl in **mirrored** mode + Ipv4Only in Win11 -> pnpm(❎)~~

~~Wsl in **NAT** mode + Ipv4Only in Win11 + Global proxy in Win11 -> pnpm(❎)~~

Wsl in **mirrored** mode + Ipv4Only in Win11 + Global proxy in Win11 -> pnpm(✅)

## Temporary failure in name resolution in Wsl2
```
sudo rm /etc/resolv.conf
sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
sudo bash -c 'echo "[network]" > /etc/wsl.conf'
sudo bash -c 'echo "generateResolvConf = false" >> /etc/wsl.conf'
sudo chattr +i /etc/resolv.conf
```