#!/bin/bash

# 从虚拟机里编译好的文件
source_folder="/home/daly/dalyfiles/works-space/lowcode/amis/packages"
# 拷贝到我的项目中
destination_folder="/mnt/c/Users/Daly Huang/DalyFiles/walmart-space/lowcode/wlm-lowcode-web/node_modules"

cp -rv "$source_folder"/amis/esm/* "$destination_folder"/amis/esm
cp -rv "$source_folder"/amis/lib/* "$destination_folder"/amis/lib
cp -rv "$source_folder"/amis-ui/esm/* "$destination_folder"/amis-ui/esm
cp -rv "$source_folder"/amis-ui/lib/* "$destination_folder"/amis-ui/lib

echo "拷贝完成"
