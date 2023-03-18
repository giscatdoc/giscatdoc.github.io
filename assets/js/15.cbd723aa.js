(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{289:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"示例数据与配置简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例数据与配置简介"}},[t._v("#")]),t._v(" 示例数据与配置简介")]),t._v(" "),a("p",[t._v("本小节介绍示例数据及配置信息是如何组织在一起的，在开始前，请先找一个数据库连接工具，比如Navicat或者DataGrip，连上前面的postgis，我们对照着表来说。")]),t._v(" "),a("h2",{attrs:{id:"示例数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例数据"}},[t._v("#")]),t._v(" 示例数据")]),t._v(" "),a("p",[t._v("giscat_testdata下有三张表，存放着示例数据：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("表名")]),t._v(" "),a("th",[t._v("数据")]),t._v(" "),a("th",[t._v("形状")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("test_point")]),t._v(" "),a("td",[t._v("省会位置")]),t._v(" "),a("td",[t._v("点")])]),t._v(" "),a("tr",[a("td",[t._v("test_line")]),t._v(" "),a("td",[t._v("省边界")]),t._v(" "),a("td",[t._v("线")])]),t._v(" "),a("tr",[a("td",[t._v("test_polygon")]),t._v(" "),a("td",[t._v("省区域面")]),t._v(" "),a("td",[t._v("面")])])])]),t._v(" "),a("p",[t._v("每张表中都有一个shape字段，用以存储数据的形状。")]),t._v(" "),a("p",[t._v("这些数据怎么来的的，首先，我们需要执行sql"),a("code",[t._v("create extension postgis")]),t._v("，在当前库中添加postgis扩展。随后，构造一张包含geometry类型字段的表：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" xxx\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    shape "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("geometry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("linestring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4326")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中，geometry(linestring,4326)的参数：")]),t._v(" "),a("p",[t._v("linestring表示这个字段只能存线类型的geometry，不确定的话也可以笼统地写成geometry(geometry,4326)；")]),t._v(" "),a("p",[t._v("4326表示其坐标系，即我们常说的经纬度坐标。")]),t._v(" "),a("p",[t._v("最后往表中插入数据即可：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" xxx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" st_geomfromtext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'srid=4326;linestring(101.3 21.2,102.4 23.1)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("linestring(101 21,102 23)")]),t._v("是一种几何对象的描述格式，叫做"),a("a",{attrs:{href:"https://libgeos.org/specifications/wkt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WKT"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("geometry字段也可以加上索引，有效地提高空间查询效率:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" xxx_geom_idx\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" xxx\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" GIST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("在讲解配置表前，我们需要简单了解一下gis的基本对象模型：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/gis-model.jpg",alt:"gis对象基本模型示意"}})]),t._v(" "),a("p",[t._v("如图所示，以路况信息为例，\n每条路是一个要素（feature），包含了道路位置（geometry）和路名、拥挤程度等属性(property);\n所有道路构成道路图层(layer)；\n把道路以及建筑、水系等图层添加到地图(map)，配上相应的展现样式，就完成了一幅地图的制作。")]),t._v(" "),a("p",[t._v("而实际的系统建设中，feature的数量往往很大，我们需要一个数据库、文件之类的介质来存储和维护feature。\n介质中的存储结构成为数据集（data-set），例如数据库中的一张表就是一个数据集；\n而程序与介质连接的对象我们称为数据连接(data-connect)，例如jdbc中的java.sql.Connection对象就是一个数据连接。")]),t._v(" "),a("p",[t._v("所以，在giscat_config库中，设计了7张表来完成上述模型的存储和关联：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("表名")]),t._v(" "),a("th",[t._v("存储配置")]),t._v(" "),a("th",[t._v("对应模型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data_connect")]),t._v(" "),a("td",[t._v("数据连接")]),t._v(" "),a("td",[t._v("data-connect")])]),t._v(" "),a("tr",[a("td",[t._v("data_set")]),t._v(" "),a("td",[t._v("数据集")]),t._v(" "),a("td",[t._v("data-set")])]),t._v(" "),a("tr",[a("td",[t._v("layer")]),t._v(" "),a("td",[t._v("图层")]),t._v(" "),a("td",[t._v("layer")])]),t._v(" "),a("tr",[a("td",[t._v("layer_data_rule")]),t._v(" "),a("td",[t._v("图层加载数据集的规则")]),t._v(" "),a("td",[t._v("layer")])]),t._v(" "),a("tr",[a("td",[t._v("map")]),t._v(" "),a("td",[t._v("地图")]),t._v(" "),a("td",[t._v("map")])]),t._v(" "),a("tr",[a("td",[t._v("layer_in_map")]),t._v(" "),a("td",[t._v("地图包含哪些图层")]),t._v(" "),a("td",[t._v("map")])]),t._v(" "),a("tr",[a("td",[t._v("vector_tile_service")]),t._v(" "),a("td",[t._v("矢量瓦片服务配置")]),t._v(" "),a("td",[t._v("服务")])])])]),t._v(" "),a("h3",{attrs:{id:"data-connect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-connect"}},[t._v("#")]),t._v(" data_connect")]),t._v(" "),a("p",[t._v("data_connect中包含3个字段：")]),t._v(" "),a("p",[t._v("id是其唯一id。")]),t._v(" "),a("p",[t._v("loader数据连接加载器的类名，这里在进行插件开发时会详细说明，本示例中使用的是pg数据库的连接，所以填SqlDataConnectLoader即可。")]),t._v(" "),a("p",[t._v("config是数据连接的配置信息，它是一个json对象，本示例中是一个标准的"),a("a",{attrs:{href:"https://github.com/brettwooldridge/HikariCP#essentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("hikaricp连接池"),a("OutboundLink")],1),t._v("\n配置信息：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postgres"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sde"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jdbcUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:postgresql://localhost:5432/giscat_testdata"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"driverClassName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.postgresql.Driver"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimumIdle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maximumPoolSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"data-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-set"}},[t._v("#")]),t._v(" data_set")]),t._v(" "),a("p",[t._v("data_set中包含4个字段：")]),t._v(" "),a("p",[t._v("id是其唯一id。")]),t._v(" "),a("p",[t._v("loader数据集加载器的类名，这里在进行插件开发时会详细说明，本示例中使用的是postgis数据集，所以填PostgisDataSetLoader即可。")]),t._v(" "),a("p",[t._v("data_connect_id是数据集依赖的数据连接的id。")]),t._v(" "),a("p",[t._v("config是数据集的配置信息，它是一个json对象，本示例中，json里需要填写表名和表中geometry字段的字段名：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tableName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_polygon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"shapeColumn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shape"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layer"}},[t._v("#")]),t._v(" layer")]),t._v(" "),a("p",[t._v("layer中仅存放图层的唯一id。")]),t._v(" "),a("h3",{attrs:{id:"layer-data-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layer-data-rule"}},[t._v("#")]),t._v(" layer_data_rule")]),t._v(" "),a("p",[t._v("layer_data_rule与图层是多对一关系，包含6个字段：")]),t._v(" "),a("p",[t._v("layer_id表示对哪个图层生效。")]),t._v(" "),a("p",[t._v("min_zoom、max_zoom是规则生效的最小、最大"),a("a",{attrs:{href:"https://blog.csdn.net/weixin_30367873/article/details/98045260",target:"_blank",rel:"noopener noreferrer"}},[t._v("层级"),a("OutboundLink")],1),t._v(",-1表示不限制。")]),t._v(" "),a("p",[t._v("data_set_id表示去哪个数据集获取数据。")]),t._v(" "),a("p",[t._v("expression是一个mapbox表达式，表示对数据集过滤的规则，为空则表示不进行过滤。")]),t._v(" "),a("p",[t._v("order_num是一个优先级数值，如果在某个层级，一个图层有多个规则生效，则取order_num最小的那个规则。")]),t._v(" "),a("h3",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" map")]),t._v(" "),a("p",[t._v("map中仅存放地图的唯一id。")]),t._v(" "),a("h3",{attrs:{id:"layer-in-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layer-in-map"}},[t._v("#")]),t._v(" layer_in_map")]),t._v(" "),a("p",[t._v("layer_in_map与地图、与图层都是多对多关系，包含4个字段：")]),t._v(" "),a("p",[t._v("map_id、layer_id共同决定了某个地图中包含哪些图层。")]),t._v(" "),a("p",[t._v("layer_name表示图层在某个地图中的名称，为了防止传输中的各种奇怪问题，推荐名称配置为英文，在一个地图里，layer_name是唯一的。")]),t._v(" "),a("p",[t._v("z_index是地图中图层的叠放顺序，z_index值越大的图层叠在越上层。")]),t._v(" "),a("h3",{attrs:{id:"vector-tile-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vector-tile-service"}},[t._v("#")]),t._v(" vector_tile_service")]),t._v(" "),a("p",[t._v("vector_tile_service存放了矢量瓦片服务信息，或许在后续的版本里会新增其它扩展服务及对应配置表，vector_tile_service共3个字段：")]),t._v(" "),a("p",[t._v("map_id是地图id，由于与map是一对一关系，所以这个字段也是唯一的。")]),t._v(" "),a("p",[t._v("cache_time_out是瓦片缓存失效时间，单位毫秒。")]),t._v(" "),a("p",[t._v("layer_configs是一个key-value格式的json，key是地图中的图层name，value是此图层的瓦片配置参数，若某图层没配，则此图层所有参数取默认值：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"points"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"propertyNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"simplifyDistance"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"polygons"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"propertyNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"simplifyDistance"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中propertyNames表示此图层瓦片需要取哪些属性，为空表示不取；")]),t._v(" "),a("p",[t._v("simplifyDistance表示对图层中的geometry用道格拉斯-普克算法进行简化，单位是像素，例如一个面的坐标非常精细时，面中的点非常多，但在瓦片上人眼无法分辨这么精细，用这个参数简化能大幅提高性能。")]),t._v(" "),a("p",[t._v("至此，所有数据介绍完毕，您可以愉快地往postgis中写入您的业务数据表，并修改配置表来完成您的GIS服务发布工作了~~~")]),t._v(" "),a("p",[t._v("接下来，您可以阅读"),a("RouterLink",{attrs:{to:"/giscat-server/api/"}},[t._v("接口说明")]),t._v("章节来了解详细的接口功能和输入输出。")],1),t._v(" "),a("p",[t._v("如果默认的postgis数据连接、数据集无法满足您的业务需求，也可以阅读"),a("RouterLink",{attrs:{to:"/giscat-server/plugin/"}},[t._v("插件扩展")]),t._v("章节来编写一个适合您的插件。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);