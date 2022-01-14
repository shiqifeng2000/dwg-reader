# dwg-reader

Gis 专用 dwg 前端解析器，目前 build 为 x86_64 位版，可根据需要自行编译其他结构的版本

# 使用方法

import dwgReader from "dwgReader";

new dwgReader().then((reader)=>{
return reader.read(yourbinary);
})
