rnd=$RANDOM
loc=westeurope
grp=az-lab
vmname=labvm-$rnd
user=azlabadmin
pwd=Lab@dmin1234
# Windows 10 image names change frequently. To get the current img name use: az vm image list -f "Windows-10" -l westeurope  --all -o table
img=MicrosoftWindowsDesktop:Windows-10:win10-21h2-pro:19044.1348.2111032328

az group create -n $grp -l $loc

az vm create -g $grp -n $vmname --admin-username $user --admin-password $pwd --image $img --size Standard_E2s_v3 --public-ip-sku Standard

az vm auto-shutdown -g $grp -n $vmname --time 1730