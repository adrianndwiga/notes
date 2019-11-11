az vm create \
    --resource-group $resource-group \
    --location $location \
    --name $vm-name \
    --nics $nics \
    --image $vm-image \
    --admin-username $admin-username \
    --autthentication-type $authentication-type \
    --ssh-key-value $ssh-key-value