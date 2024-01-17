export default {
  type: 'page',
  id: 'analysisPage',
  title: '表单页面1',
  // initApi: 'post:/ccop-masterdata/district/getAllCities',
  // initApi: {
  //   method: 'post',
  //   url: '/ccop-masterdata/district/getAllCities',
  //   responseData: {
  //     allCities: '${items}'
  //   }
  // },
  data: {
    activityTypeOptions: [
      {label: '1v1客户沟通', value: 0},
      {label: '客户群沟通', value: 1},
      {label: '朋友圈', value: 2}
    ]
    // businessTypeLabel: {
    //   0: '素材中心',
    //   1: '群接龙'
    // }
    // dateRange: '1661961600,1664553599',
    // name: 'ccc'
    // email: 'rick@gmail.com'
  },
  body: [
    {
      label: 'ajax请求',
      type: 'button',
      actionType: 'ajax',
      api: '/api/mock2/form/saveForm'
    },
    {
      type: 'button',
      label: '校验表单',
      className: 'mb-2',
      onEvent: {
        click: {
          actions: [
            {
              actionType: 'setValue',
              componentId: 'analysisPage',
              args: {
                value: {ccc: 100}
              }
            }
          ]
        }
      }
    },
    {
      type: 'form',
      id: 'search_form',
      mode: 'horizontal',
      debug: true,
      // target: 'subpage',
      // resetAfterSubmit: true,
      canAccessSuperData: false,
      body: [
        // {
        //   type: 'input-date-range',
        //   name: 'dateRange',
        //   label: '日期范围',
        //   value: 'today,today'
        // },
        {
          label: 'Name',
          type: 'input-text',
          name: 'name',
          // placeholder: '请选择(需先选择群区域范围)',
          required: true,
          value: 'rick'
        },
        {
          label: '默认',
          type: 'transfer',
          name: 'transfer',
          joinValues: false,
          extractValue: false,
          searchable: true,
          source: {
            method: 'get',
            url: '/api/mock2/options/transferSearch?page=${page}&perPage=${perPage}',
            responseData: {
              // items: '${items}'
              items: [{id: 1, label: '${items[0].label}', value: 1}]
              // items: function (v) {
              //   console.log(v);
              //   return v.items;
              //   debugger;
              // }
            }
          },
          searchApi:
            '/api/mock2/options/transferSearch?page=${page}&perPage=${perPage}&name=${term}',

          pagination: {
            enable: true,
            layout: ['pager', 'perpage', 'total'],
            popOverContainerSelector: '.cxd-Panel--form'
          },
          value: [
            {
              label: 'Laura Lewis',
              value: '1',
              id: 1
            },
            {
              label: 'Christopher Rodriguez',
              value: '3',
              id: 3
            },
            {
              label: 'Laura Miller',
              value: '12',
              id: 12
            },
            {
              label: 'Patricia Robinson',
              value: '14',
              id: 14
            }
          ]
        }
        // {
        //   label: 'Email',
        //   type: 'input-email',
        //   placeholder: '请输入邮箱地址',
        //   name: 'email',
        //   value: 'rick@gmail.com'
        // },
        // {
        //   label: 'transfer-picker',
        //   type: 'transfer-picker',
        //   name: 'transfer-picker',
        //   selectMode: 'list',
        //   pickerSize: 'md',
        //   joinValues: false,
        //   extractValue: false,
        //   source: '/api/mock2/options/transfer?page=${page}&perPage=${perPage}',
        //   searchable: true,
        //   pagination: {
        //     enable: true,
        //     layout: ['pager', 'perpage', 'total'],
        //     popOverContainerSelector: '.cxd-Modal'
        //   },
        //   value: [
        //     {
        //       label: 'Laura Lewis',
        //       value: '1',
        //       id: 1
        //     },
        //     {
        //       label: 'Christopher Rodriguez',
        //       value: '3',
        //       id: 3
        //     },
        //     {
        //       label: 'Laura Miller',
        //       value: '12',
        //       id: 12
        //     },
        //     {
        //       label: 'Patricia Robinson',
        //       value: '14',
        //       id: 14
        //     }
        //   ]
        // },
        // {
        //   label: '默认',
        //   type: 'transfer',
        //   name: 'transfer',
        //   joinValues: false,
        //   extractValue: false,
        //   searchable: true,
        //   source:
        //     '/api/mock2/options/transferSearch?page=${page}&perPage=${perPage}',
        //   // searchApi:
        //   //   '/api/mock2/options/transferSearch?page=${page}&perPage=${perPage}&name=${term}',
        //   // searchApi:
        //   //   '/api/mock2/options/transferSearch?page=${page}&perPage=${perPage}&name=${term}',
        //   searchApi: {
        //     method: 'post',
        //     url: '/api/mock2/options/transferSearch',
        //     data: {
        //       page: '${page}',
        //       perPage: '${perPage}',
        //       name: '${term}'
        //     }
        //   },

        //   pagination: {
        //     enable: true,
        //     layout: ['pager', 'perpage', 'total'],
        //     popOverContainerSelector: '.cxd-Panel--form'
        //   },
        //   value: [
        //     {
        //       label: 'Laura Lewis',
        //       value: '1',
        //       id: 1
        //     },
        //     {
        //       label: 'Christopher Rodriguez',
        //       value: '3',
        //       id: 3
        //     },
        //     {
        //       label: 'Laura Miller',
        //       value: '12',
        //       id: 12
        //     },
        //     {
        //       label: 'Patricia Robinson',
        //       value: '14',
        //       id: 14
        //     }
        //   ]
        // }
        // {
        //   label: 'transfer',
        //   type: 'transfer',
        //   name: 'transfer',
        //   selectMode: 'list',
        //   pickerSize: 'md',
        //   joinValues: false,
        //   extractValue: false,
        //   source: '/api/mock2/options/transfer?page=${page}&perPage=${perPage}',
        //   pagination: {
        //     enable: true,
        //     layout: ['pager', 'perpage', 'total'],
        //     popOverContainerSelector: '.cxd-Panel--form'
        //   },
        //   value: [
        //     {
        //       label: 'Laura Lewis',
        //       value: '1',
        //       id: 1
        //     },
        //     {
        //       label: 'Christopher Rodriguez',
        //       value: '3',
        //       id: 3
        //     },
        //     {
        //       label: 'Laura Miller',
        //       value: '12',
        //       id: 12
        //     },
        //     {
        //       label: 'Patricia Robinson',
        //       value: '14',
        //       id: 14
        //     }
        //   ]
        // }
      ],
      actions: [
        {
          type: 'submit',
          primary: true,
          label: '查询'
        },
        // {
        //   // type: 'button',
        //   // actionType: 'clear-and-submit',
        //   type: 'reset',
        //   // actionType: 'reset-and-submit',
        //   label: '重置'
        // },
        {
          type: 'button',
          label: '重置',
          onEvent: {
            click: {
              actions: [
                {
                  actionType: 'reset',
                  componentId: 'search_form'
                }
                // {
                //   actionType: 'submit',
                //   componentId: 'search_form'
                // }
              ]
            }
          }
        }
      ],
      onEvent: {
        // submit: {
        //   actions: [
        //     {
        //       actionType: 'toast', // 执行toast提示动作
        //       args: {
        //         // 动作参数
        //         msgType: 'info',
        //         msg: 'submit事件'
        //       }
        //     },
        //     {
        //       actionType: 'validate',
        //       componentId: 'search_form'
        //       // outputVar: 'form_validate_result'
        //     },
        //     // {
        //     //   actionType: 'toast', // 执行toast提示动作
        //     //   args: {
        //     //     // 动作参数
        //     //     msgType: 'info',
        //     //     msg: '${event.data.validateResult|json}'
        //     //   }
        //     // },
        //     // {
        //     //   actionType: 'validate',
        //     //   componentId: 'search_form',
        //     //   outputVar: 'form_validate_result'
        //     // },
        //     {
        //       actionType: 'setValue',
        //       componentId: 'subpage',
        //       args: {
        //         value: {aaa: '${event.data.validateResult.payload}'}
        //       },
        //       expression: 'event.data.validateResult.error === ""'
        //     },
        //     {
        //       actionType: 'setValue',
        //       componentId: 'analysisPage',
        //       args: {
        //         value: {bbb: '${event.data.validateResult.payload}'}
        //       },
        //       expression: 'event.data.validateResult.error === ""'
        //     }
        //   ]
        // },
        // validate: [
        //   {
        //     actionType: 'toast', // 执行toast提示动作
        //     args: {
        //       // 动作参数
        //       msgType: 'info',
        //       msg: '${event.data}'
        //     }
        //   }
        // ]
      }
    }
    // {
    //   type: 'crud',
    //   api: '/api/mock2/sample',
    //   syncLocation: false,
    //   headerToolbar: [
    //     {
    //       label: 'ajax请求',
    //       type: 'button',
    //       actionType: 'ajax',
    //       api: '/api/mock2/form/saveForm'
    //     }
    //   ],
    //   columns: [
    //     {
    //       name: 'id',
    //       label: 'ID'
    //     },
    //     {
    //       name: 'engine',
    //       label: 'Rendering engine'
    //     },
    //     {
    //       name: 'browser',
    //       label: 'Browser'
    //     },
    //     {
    //       name: 'platform',
    //       label: 'Platform(s)'
    //     },
    //     {
    //       name: 'version',
    //       label: 'Engine version'
    //     },
    //     {
    //       name: 'grade',
    //       label: 'CSS grade'
    //     },
    //     {
    //       type: 'operation',
    //       label: '操作',
    //       buttons: [
    //         {
    //           label: '详情',
    //           type: 'button',
    //           level: 'link',
    //           actionType: 'dialog',
    //           dialog: {
    //             title: '查看详情',
    //             body: {
    //               type: 'form',
    //               body: [
    //                 {
    //                   type: 'input-text',
    //                   name: 'engine',
    //                   label: 'Engine'
    //                 },
    //                 {
    //                   type: 'input-text',
    //                   name: 'browser',
    //                   label: 'Browser'
    //                 },
    //                 {
    //                   type: 'input-text',
    //                   name: 'platform',
    //                   label: 'platform'
    //                 },
    //                 {
    //                   type: 'input-text',
    //                   name: 'version',
    //                   label: 'version'
    //                 },
    //                 {
    //                   type: 'control',
    //                   label: 'grade',
    //                   body: {
    //                     type: 'tag',
    //                     label: '${grade}',
    //                     displayMode: 'normal',
    //                     color: 'active'
    //                   }
    //                 }
    //               ]
    //             }
    //           }
    //         },
    //         {
    //           label: '删除',
    //           type: 'button',
    //           level: 'link',
    //           className: 'text-danger',
    //           disabledOn: "this.grade === 'A'"
    //         }
    //       ]
    //     }
    //   ]
    // }
    // {
    //   type: 'Service',
    //   id: 'subpage',
    //   body: [
    //     {
    //       type: 'form',
    //       mode: 'horizontal',
    //       id: 'showBoard',
    //       body: [
    //         {
    //           type: 'static',
    //           label: 'number',
    //           value: '${ccc}'
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]
};
