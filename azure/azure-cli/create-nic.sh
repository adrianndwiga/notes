az network nic create \
    --resource-group $resource-group \
    --name $nic-name \
    --vnet-name $vnet-name \
    --subnet $subnet \
    --network-security-group $network-security-group \
    --public-ip-address $public-ip-address
