#!/bin/bash

# 从虚拟机里编译好的文件
source_folder="/home/daly/dalyfiles/works-space/lowcode/amis/npm"
# 拷贝到我的项目中
destination_folder="/mnt/c/Users/Daly Huang/DalyFiles/walmart-space/utils-web/amis"

rm -rf "$destination_folder"/packages/{amis-formula,amis-core,amis-ui,amis}/*


cp -rv "$source_folder"/* "$destination_folder"

echo "拷贝完成"
