"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2863],{92863:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var a=l(38683),t={name:"reviewElement",extends:l(45488).Z,data:function(){return{form:{responsibleDepartment:{dict:[{basename:"法务部门职责",diccode:"type1"},{basename:"财务部门职责",diccode:"type2"},{basename:"承办部门职责",diccode:"type3"},{basename:"相关业务部门职责",diccode:"type4"}],fieldValue:[],fieldValueType:Array,fieldName:"responsibleDepartment",fieldShow:"",fieldType:5,dictCode:"",label:"职责部门",pluginType:"CHECKBOX"},contractType:{enableFilter:!0,keyword:void 0,treeData:a.Jq,fieldValue:"",fieldName:"contractType",fieldShow:"",fieldType:"1",label:"业务域",pluginType:"TREE",refName:"tree"},reviewElementEnabled:{dict:[{basename:"启用",diccode:"type1"},{basename:"停用",diccode:"type2"}],fieldValue:[],fieldValueType:Array,fieldName:"reviewElementEnabled",fieldShow:"",fieldType:5,dictCode:"",label:"审查要素启用状态",pluginType:"CHECKBOX"},contractName:{fieldValue:"",fieldName:"contractName",fieldType:"",label:"合同名称"},riskNumber:{fieldValue:"",fieldName:"riskNumber",fieldType:"",label:"风险编号"},riskType:{fieldValue:"",fieldName:"riskType",fieldType:"",label:"风险分类"},riskSource:{fieldValue:"",fieldName:"riskSource",fieldType:"",label:"风险来源"},ourIdentity:{fieldValue:"",fieldName:"ourIdentity",fieldType:"",label:"我方身份"}},tags:[],collapseActiveNames:["1","2","3"],searchForm:{keyword:void 0,sortField:"",showMore:!1},infor:{childList:[],rights:0,sql:[],totalPage:1,total:1,page:1,sKey:"",sortName:"",sortBy:"desc",size:10}}},methods:{loadPage:function(){this.createParam(),this.infor=a.KN},jumpTo:function(e){this.$router.replace(e)}},created:function(){},mounted:function(){this.loadPage()}},i=(0,l(1001).Z)(t,function(){var l=this,e=l.$createElement,a=l._self._c||e;return a("div",{staticClass:"list-page review-element"},[a("left-panel-container",{attrs:{"panel-width":"250px"},scopedSlots:l._u([{key:"panel",fn:function(){return[a("el-scrollbar",{staticClass:"y-box"},[a("el-form",{ref:"form",staticClass:"side-form",attrs:{"label-width":"0px",size:"small"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-collapse",{on:{change:function(e){}},model:{value:l.collapseActiveNames,callback:function(e){l.collapseActiveNames=e},expression:"collapseActiveNames"}},[a("el-collapse-item",{attrs:{title:"职责部门",name:"1"}},[a("template",{slot:"title"},[a("h3",[l._v("职责部门")])]),[a("el-form-item",[a("el-checkbox-group",{on:{change:l.loadPage},model:{value:l.form.responsibleDepartment.fieldValue,callback:function(e){l.$set(l.form.responsibleDepartment,"fieldValue",e)},expression:"form.responsibleDepartment.fieldValue"}},l._l(l.form.responsibleDepartment.dict,function(e,t){return a("el-checkbox",{attrs:{label:e.diccode}},[l._v(" "+l._s(e.basename)+" ")])}),1)],1)]],2),a("el-collapse-item",{attrs:{title:"合同类型",name:"2"}},[a("template",{slot:"title"},[a("h3",[l._v("合同类型")])]),[a("d-tree",l._b({ref:"tree",on:{"node-click":l.createParam}},"d-tree",l.form.contractType,!1,!0))]],2),a("el-collapse-item",{attrs:{title:"审查要素启用状态",name:"3"}},[a("template",{slot:"title"},[a("h3",[l._v("审查要素启用状态")])]),[a("el-form-item",[a("el-checkbox-group",{on:{change:l.loadPage},model:{value:l.form.reviewElementEnabled.fieldValue,callback:function(e){l.$set(l.form.reviewElementEnabled,"fieldValue",e)},expression:"form.reviewElementEnabled.fieldValue"}},l._l(l.form.reviewElementEnabled.dict,function(e,t){return a("el-checkbox",{attrs:{label:e.diccode}},[l._v(" "+l._s(e.basename)+" ")])}),1)],1)]],2)],1)],1)],1)]},proxy:!0},{key:"default",fn:function(){return[a("div",{staticClass:"common-list"},[a("el-form",{attrs:{inline:!0,size:"small","label-width":"100px"}},[a("div",{staticClass:"main-params"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"合同名称"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.contractName.fieldValue,callback:function(e){l.$set(l.form.contractName,"fieldValue",e)},expression:"form.contractName.fieldValue"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"风险编号"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.riskNumber.fieldValue,callback:function(e){l.$set(l.form.riskNumber,"fieldValue",e)},expression:"form.riskNumber.fieldValue"}})],1)],1),a("el-col",{staticClass:"button-group",attrs:{span:8}},[a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-download"}},[l._v("导出")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:l.loadPage}},[l._v("查询")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:l.resetParam}},[l._v("重置")]),a("el-button",{attrs:{type:"text"},on:{click:function(e){l.searchForm.showMore=!l.searchForm.showMore}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!l.searchForm.showMore,expression:"!searchForm.showMore"}]},[l._v(" 展开"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("span",{directives:[{name:"show",rawName:"v-show",value:l.searchForm.showMore,expression:"searchForm.showMore"}]},[l._v(" 收起"),a("i",{staticClass:"el-icon-arrow-up el-icon--right"})])])],1)],1)],1)],1),a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:l.searchForm.showMore,expression:"searchForm.showMore"}]},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"风险分类"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.riskType.fieldValue,callback:function(e){l.$set(l.form.riskType,"fieldValue",e)},expression:"form.riskType.fieldValue"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"风险来源"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.riskSource.fieldValue,callback:function(e){l.$set(l.form.riskSource,"fieldValue",e)},expression:"form.riskSource.fieldValue"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"我方身份"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.ourIdentity.fieldValue,callback:function(e){l.$set(l.form.ourIdentity,"fieldValue",e)},expression:"form.ourIdentity.fieldValue"}})],1)],1)],1)],1)]),a("div",{staticClass:"params-tag"},[0<l.tags.length?a("el-form-item",l._l(l.tags,function(t,e){return a("el-tag",{attrs:{closable:"",type:"info"},on:{close:function(e){return l.closeTag(t.name)}}},[l._v(" "+l._s(t.label)+"："+l._s(t.fieldShow)+" ")])}),1):l._e()],1)],1),a("el-table",{staticClass:"table",attrs:{data:l.infor.items}},[a("el-table-column",{attrs:{fixed:"left",label:l.$t("序号"),width:"80",align:"left"},scopedSlots:l._u([{key:"default",fn:function(e){return[l._v(" "+l._s(e.$index+1+(l.infor.page-1)*l.infor.size)+" ")]}}])}),a("el-table-column",{attrs:{prop:"reviewElement",fixed:"left",label:l.$t("审查要素"),"show-tooltip-when-overflow":!1,align:"left","min-width":"300"}}),a("el-table-column",{attrs:{prop:"number",label:l.$t("编号"),"show-tooltip-when-overflow":!0,"min-width":"220"}}),a("el-table-column",{attrs:{prop:"applicableBusinessType",label:l.$t("适用业务类型"),"min-width":"220"},scopedSlots:l._u([{key:"default",fn:function(e){return l._l(e.row.applicableBusinessType,function(e,t){return a("el-tooltip",{key:t,attrs:{effect:"dark",content:e,placement:"top"}},[a("div",{staticClass:"column-card-wrapper"},[a("span",{staticClass:"column-card ellipsis"},[l._v(l._s(e))])])])})}}])}),a("el-table-column",{attrs:{prop:"riskSource",label:l.$t("具体风险来源"),align:"left","min-width":"220"},scopedSlots:l._u([{key:"default",fn:function(e){return l._l(e.row.riskSource,function(e,t){return a("el-tooltip",{key:t,attrs:{effect:"dark",content:e,placement:"top"}},[a("div",{staticClass:"column-card-wrapper"},[a("span",{staticClass:"column-card ellipsis"},[l._v(l._s(e))])])])})}}])}),a("el-table-column",{attrs:{prop:"responsibleDepartment",label:l.$t("职责部门"),align:"left","min-width":"220"},scopedSlots:l._u([{key:"default",fn:function(e){return l._l(e.row.responsibleDepartment,function(e,t){return a("el-tooltip",{key:t,attrs:{effect:"dark",content:e,placement:"top"}},[a("div",{staticClass:"column-card-wrapper"},[a("span",{staticClass:"column-card ellipsis"},[l._v(l._s(e))])])])})}}])}),a("el-table-column",{attrs:{prop:"inconformityCount",label:l.$t("识别不符次数"),"show-tooltip-when-overflow":!0,"min-width":"160"}}),a("el-table-column",{attrs:{prop:"updateDate",label:l.$t("更新日期"),"show-tooltip-when-overflow":!0,"min-width":"160"}}),a("el-table-column",{staticClass:"operation-column",attrs:{fixed:"right",label:l.$t("操作"),align:"left",width:"100"},scopedSlots:l._u([{key:"default",fn:function(e){return[a("span",{staticClass:"operation-button detail-button",on:{click:function(e){return l.jumpTo("/legalThinkTank/reviewElementDetail")}}},[a("i",{staticClass:"el-icon-more"})]),a("span",{staticClass:"operation-button knowledge-graph-button"},[a("i",{staticClass:"el-icon-paperclip"})])]}}])})],1),a("pagination",{attrs:{infor:l.infor},on:{listening:l.loadPage}})],1)]},proxy:!0}])})],1)},[],!1,null,"4f886601",null).exports},45488:function(e,t,l){l.d(t,{Z:function(){return i}});var a={createTags:function(i){var e,o=[];for(e in i)!function(e){var t,l=i[e];if("CHECKBOX"===l.pluginType)0<l.fieldValue.length&&(t=[],l.dict.forEach(function(e){-1<l.fieldValue.indexOf(e.diccode)&&t.push(e.basename)}),l.fieldShow=t.join("，"));else if("RADIO"===l.pluginType){if(l.fieldValue)for(var a=0;a<l.dict.length;a++)if(l.dict[a].diccode===l.fieldValue){l.fieldShow=l.dict[a].basename;break}}else"TREE"!==l.pluginType&&("DATERANGE"===l.pluginType?l.fieldValue&&0<l.fieldValue.length&&(l.fieldShow=l.fieldValue[0]+" 至 "+l.fieldValue[1]):l.fieldShow=l.fieldValue);l.fieldValue&&l.fieldShow&&o.push({name:l.fieldName,label:l.label,fieldShow:l.fieldShow})}(e);return o},removeTag:function(e,t){t=t[e];t.fieldShow="",t.fieldValueType?t.fieldValue=new t.fieldValueType:t.fieldValue=""}},i={name:"listPageBase",data:function(){return{form:{},tags:[],searchForm:{keyword:void 0,sortField:"",showMore:!1},infor:{childList:[],rights:0,sql:[],totalPage:1,total:1,page:1,sKey:"",sortName:"",sortBy:"desc",size:10}}},methods:{loadPage:function(){this.createParam(),this.infor=[]},createParam:function(){this.tags=a.createTags(this.form)},resetParam:function(){var t=this;this.tags.forEach(function(e){a.removeTag(e.name,t.form);e=t.form[e.name];"TREE"===e.pluginType&&t.$refs[e.refName].clear()}),this.createParam()},closeTag:function(e){a.removeTag(e,this.form);e=this.form[e];"TREE"===e.pluginType&&this.$refs[e.refName].clear(),this.createParam()}}}},38683:function(e,t,l){l.d(t,{Jq:function(){return a},KN:function(){return i},dw:function(){return o}});var a=[{label:"采购合同",value:"1",children:[{label:"零部件采购合同",value:"1-1",children:[{label:"风险条款",value:"1-1-1"},{label:"缺失条款",value:"1-1-2"}]},{label:"备件/原材料采购合同",value:"1-2"}]},{label:"销售合同",value:"2",children:[{label:"二级 2-1"}]},{label:"借款合同",value:"3",children:[{label:"二级 2-1"}]},{label:"租赁合同",value:"4",children:[{label:"二级 2-1"}]}],i={total:115,totalPage:12,sortBy:"",page:1,sort:"",items:[{reviewElement:"非招标工程，应提交经注册造价工程师签字，并加盖注册执业专用章及编制单位公章的工程预算书原件，同时需提交该注册造价工程师注册证复印件。政府投资工程(涉及国家安全、国家秘密的工程、应急建设工程和抢险救灾的建设工程)还需提供审计专业局出具的审计报告复印件。",number:"SC-01-001",applicableBusinessType:["工程总承包合同"],riskSource:["工程预算书","造价工程师注册证","审计报告"],responsibleDepartment:["承办部门","法务部门"],inconformityCount:3432,updateDate:"2022-12-12"}],size:10},o={total:115,totalPage:12,sortBy:"",page:1,sort:"",items:[{detail:"2021年11月，由于货物运输资源饱和，**公司寻求新的货物运输方后，拟于对方签订《****货物运输合同》，合同中约定我方的租赁方式为即租车又租人，一旦人员出现人身安全，会导致我方承担风险过重,此类型业务采用的合同文本类型使用错误，应使用货物运输合同，司机方由运输方提供。",tags:["合同文本","租赁合同","货车"],title:"《***货物运输合同》采用了货车租赁及司机雇佣的方式",source:"风险合同实例",visitCount:33,updateDate:"2022-12-12"},{detail:"1.承租方不承担租赁物的保管责任/承租方不对设备及人员的安全负责。2.出租方承担租赁物的保管责任/出租方对设备及人员的安全负责。",tags:["风险条款","租赁合同","设备","甲方"],title:"保管及安全条款",source:"风险合同实例",visitCount:1234,updateDate:"2021-11-15"},{detail:"合同应当约定负责具体履约的授权人，并详细写明授权人的身份信息、联系方式和授权权限，防止授权信息或权限不明引起纠纷。",tags:["缺失条款","租赁合同","设备","甲方"],title:"授权人约定条款",source:"外部同业知识",visitCount:1234,updateDate:"2021-11-15"}],size:10}}}]);