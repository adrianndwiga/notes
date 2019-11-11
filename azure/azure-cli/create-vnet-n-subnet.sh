az network vnet create \
    --resource-group $resource-group \
    --name $vnet-name \
    --address-prefix $address-prefix \
    --subnet-name $subnet-name \
    --subnet-prefix $subnet-prefix