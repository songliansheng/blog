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