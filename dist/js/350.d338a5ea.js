"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[350],{1350:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-container",{staticStyle:{height:"650px",border:"1px solid #eee"}},[t("el-header",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","font-size":"24px","background-color":"rgb(84, 92, 100)"}},[e._v(" 教务管理系统 "),t("el-dropdown",{on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link"},[t("i",{staticClass:"el-icon-setting"})]),t("el-dropdown-menu",{staticClass:"dropdown-menu"},[t("el-dropdown-item",{attrs:{divided:""}},[e._v("用户姓名："+e._s(e.userData.name))]),t("el-dropdown-item",{attrs:{divided:""}},[e._v("用户工号："+e._s(e.userData.uno))]),t("el-dropdown-item",{staticStyle:{"font-weight":"bold"},attrs:{divided:""}},["student"===e.userData.role?t("span",[e._v("用户类型：学生")]):"teacher"===e.userData.role?t("span",[e._v("用户类型：教师")]):"manager"===e.userData.role?t("span",[e._v("用户类型：管理员")]):e._e()]),t("el-dropdown-item",{staticStyle:{color:"red"},attrs:{divided:"",icon:"el-icon-switch-button",command:"logout"}},[e._v("退出登录")])],1),e._v(" "+e._s(e.userData.name)+" ")],1)],1),t("el-container",[t("el-aside",{staticStyle:{border:"1px solid #eee","background-color":"rgb(246, 243, 243)"},attrs:{width:"210px"}},[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","unique-opened":!1,collapse:!1,"default-openeds":["4"]}},[t("el-menu-item",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),t("router-link",{attrs:{to:"/home",id:"sideForm"}},[e._v("首页")])],1)],2),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-message"}),e._v("学生信息管理")]),t("el-menu-item",{attrs:{index:"1-1"}},[t("router-link",{attrs:{to:"/StudentsInfo",id:"sideForm"}},[e._v(" 学生信息列表 ")])],1)],2),t("el-submenu",{attrs:{index:"3"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),e._v("教师信息管理")]),t("el-menu-item",{attrs:{index:"2-1"}},[t("router-link",{attrs:{to:"/TeachersInfo",id:"sideForm"}},[e._v("教师信息管理")])],1)],2),"student"===e.userData.role?t("el-submenu",{attrs:{index:"4"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-setting"}),e._v("课程管理")]),t("el-menu-item",{attrs:{index:"3-1"}},[t("router-link",{attrs:{to:"/AllCourses",id:"sideForm"}},[e._v("全部课程查询")])],1),t("el-menu-item",{attrs:{index:"3-2"}},[t("router-link",{attrs:{to:"/CoursesSelect",id:"sideForm"}},[e._v("学生选课")])],1),t("el-menu-item",{attrs:{index:"3-3"}},[t("router-link",{attrs:{to:"/GradesInfo",id:"sideForm"}},[e._v("成绩查询")])],1),t("el-menu-item",{attrs:{index:"3-4"}},[t("router-link",{attrs:{to:"/CoursesTable",id:"sideForm"}},[e._v("课程表系统")])],1)],2):e._e(),"teacher"===e.userData.role?t("el-submenu",{attrs:{index:"4"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-setting"}),e._v("课程管理")]),t("el-menu-item",{attrs:{index:"3-1"}},[t("router-link",{attrs:{to:"/AllCourses",id:"sideForm"}},[e._v("全部课程查询")])],1),t("el-menu-item",{attrs:{index:"3-2"}},[t("router-link",{attrs:{to:"/CoursesByTeacher",id:"sideForm"}},[e._v("教师课程系统")])],1)],2):e._e(),"manager"===e.userData.role?t("el-submenu",{attrs:{index:"4"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-setting"}),e._v("课程管理")]),t("el-menu-item",{attrs:{index:"3-1"}},[t("router-link",{attrs:{to:"/AllCourses",id:"sideForm"}},[e._v("全部课程查询")])],1),t("el-menu-item",{attrs:{index:"3-2"}},[t("router-link",{attrs:{to:"/CoursesByManager",id:"sideForm"}},[e._v("管理员课程系统")])],1)],2):e._e(),t("el-submenu",{attrs:{index:"5"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-setting"}),e._v("用户信息")]),t("el-menu-item",{attrs:{index:"3-1"}},[t("router-link",{attrs:{to:"/UserInfo",id:"sideForm"}},[e._v("用户个人信息")])],1)],2)],1)],1),t("el-container",[t("el-main",[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm}},[t("el-form-item",{attrs:{label:"课程号"}},[t("el-input",{attrs:{length:"4","show-word-limit":"",placeholder:"请输入课程号"},model:{value:e.searchForm.cno,callback:function(t){e.$set(e.searchForm,"cno",t)},expression:"searchForm.cno"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.searchGradeBycno}},[e._v("查询")])],1),t("el-form-item",{attrs:{label:"课程名称"}},[t("el-input",{attrs:{length:"4","show-word-limit":"",placeholder:"请输入课程名称"},model:{value:e.searchForm.cname,callback:function(t){e.$set(e.searchForm,"cname",t)},expression:"searchForm.cname"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.searchGradeBycname}},[e._v("查询")])],1)],1),t("el-dialog",{attrs:{title:"课程查询结果",visible:e.showTable},on:{"update:visible":function(t){e.showTable=t}}},[t("el-table",{attrs:{data:e.gradeTable,border:""}},[t("el-table-column",{attrs:{align:"center",prop:"sno",label:"学号",width:"100"}}),t("el-table-column",{attrs:{align:"center",prop:"sname",label:"姓名",width:"100"}}),t("el-table-column",{attrs:{align:"center",prop:"gender",label:"性别",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(1==t.row.gender?"男":"女")+" ")]}}])}),t("el-table-column",{attrs:{align:"center",prop:"cno",label:"课程号",width:"120"}}),t("el-table-column",{attrs:{align:"center",prop:"cname",label:"课程名",width:"120"}}),t("el-table-column",{attrs:{align:"center",prop:"credit",label:"学分",width:"80"}})],1),t("el-table",{attrs:{data:e.gradeTable,border:"",width:"75%"}},[t("el-table-column",{attrs:{align:"center",prop:"tname",label:"授课教师",width:"125"}}),t("el-table-column",{attrs:{align:"center",prop:"selected",label:"已选人数",width:"80"}}),t("el-table-column",{attrs:{align:"center",prop:"capacity",label:"限选人数",width:"80"}}),t("el-table-column",{attrs:{align:"center",prop:"assMethod",label:"考核方式",width:"125"}}),t("el-table-column",{attrs:{align:"center",prop:"grade",label:"成绩",width:"80"}}),t("el-table-column",{attrs:{align:"center",prop:"result",label:"结果",width:"80"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onSubmit}},[e._v("查询")])],1),t("el-table",{attrs:{data:e.paginatedstudentGrades,border:""}},[t("el-table-column",{attrs:{align:"center",prop:"sno",label:"学号",width:"120"}}),t("el-table-column",{attrs:{align:"center",prop:"sname",label:"姓名",width:"100"}}),t("el-table-column",{attrs:{align:"center",prop:"gender",label:"性别",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(1==t.row.gender?"男":"女")+" ")]}}])}),t("el-table-column",{attrs:{align:"center",prop:"cno",label:"课程号",width:"120"}}),t("el-table-column",{attrs:{align:"center",prop:"cname",label:"课程名",width:"150"}}),t("el-table-column",{attrs:{align:"center",prop:"credit",label:"学分",width:"80"}}),t("el-table-column",{attrs:{align:"center",prop:"tname",label:"授课教师",width:"125"}}),t("el-table-column",{attrs:{align:"center",prop:"selected",label:"已选人数",width:"80"}}),t("el-table-column",{attrs:{align:"center",prop:"capacity",label:"限选人数",width:"80"}}),t("el-table-column",{attrs:{align:"center",prop:"assMethod",label:"考核方式",width:"100"}}),t("el-table-column",{attrs:{align:"center",prop:"grade",label:"成绩",width:"80"}}),t("el-table-column",{attrs:{align:"center",prop:"result",label:"结果"}})],1),t("br"),t("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, total","current-page":e.currentPage,"page-size":e.pageSize,total:e.totalRows,"page-sizes":[5,10]},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-footer",{staticStyle:{display:"flex","justify-content":"right","align-items":"center","font-size":"12px","background-color":"rgb(84, 92, 100)",height:"25px"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogTableVisible=!0}}},[e._v("关于我们")]),t("el-dialog",{attrs:{title:"开发人员信息",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[t("el-table",{attrs:{data:e.gridData}},[t("el-table-column",{attrs:{align:"center",prop:"name",label:"姓名",width:"150"}}),t("el-table-column",{attrs:{align:"center",prop:"text",label:"负责任务",width:"200"}}),t("el-table-column",{attrs:{align:"center",prop:"aaa",label:"组长/组员",width:"200"}})],1)],1)],1)],1)],1)],1)],1)},r=[],n=(a(560),a(1076)),s={data(){return{dialogTableVisible:!1,gridData:[{name:"喻卓",text:"前端开发",aaa:"组长"},{name:"汪涛",text:"后端开发",aaa:"组员"},{name:"詹培凯",text:"前端开发",aaa:"组员"},{name:"杨勃坤",text:"后端开发",aaa:"组员"}],userData:{role:"",uno:"",name:""},studentGrades:[],searchForm:{cno:"",cname:""},gradeTable:[],showTable:!1,currentPage:1,pageSize:5,total:100}},methods:{handleCommand(e){"logout"===e&&(this.$router.push("/UserLogin"),console.log("用户点击了退出登录"))},async searchGradeBycno(){this.searchForm.cno?n.Z.get(`/StudentGrades?sno=${this.userData.uno}&cno=${this.searchForm.cno}`).then((e=>{this.gradeTable=e.data.data,this.$message.success("查询成功"),this.openDialogTable()})):this.$message.error("请输入课程号")},async searchGradeBycname(){this.searchForm.cname?n.Z.get(`/StudentGrades?sno=${this.userData.uno}&cname=${this.searchForm.cname}`).then((e=>{this.gradeTable=e.data.data,this.$message.success("查询成功"),this.openDialogTable()})):this.$message.error("输入不可为空")},openDialogTable(){this.showTable=!0},handleSizeChange(e){this.pageSize=e,this.currentPage=Math.ceil(this.currentPage*this.pageSize/e)},handleCurrentChange(e){this.currentPage=e}},computed:{totalRows(){return this.studentGrades.length},paginatedstudentGrades(){const e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;return this.studentGrades.slice(e,t)}},mounted(){this.userData=this.$route.meta.userData,n.Z.get(`/AllGrades?uno=${this.userData.uno}`).then((e=>{this.studentGrades=e.data.data})).catch((e=>{console.error(e)}))}},i=s,o=a(1001),c=(0,o.Z)(i,l,r,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=350.d338a5ea.js.map