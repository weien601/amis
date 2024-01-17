#!/bin/bash

# 源文件夹路径
source_folder="/mnt/c/Users/Daly Huang/DalyFiles/work-space/lowcode/amis/packages/amis/src"

# 目标文件夹路径
destination_folder="/home/daly/dalyfiles/works-space/lowcode/amis/packages/amis/src"

# 确保目标文件夹存在，如果不存在则创建
mkdir -p "$destination_folder"

# 使用 cp 命令进行拷贝，-u 选项表示只拷贝更新的文件
cp -rv "$source_folder"/* "$destination_folder"


source_folder="/mnt/c/Users/Daly Huang/DalyFiles/work-space/lowcode/amis/packages/amis-ui/src"
destination_folder="/home/daly/dalyfiles/works-space/lowcode/amis/packages/amis-ui/src"
mkdir -p "$destination_folder"
cp -rv "$source_folder"/* "$destination_folder"

echo "拷贝完成"
