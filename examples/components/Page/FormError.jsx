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
    ],
    businessTypeLabel: {
      0: '素材中心',
      1: '群接龙'
    }
    // dateRange: '1661961600,1664553599',
    // name: 'ccc'
    // email: 'rick@gmail.com'
  },
  body: [
    {
      type: 'button',
      label: '校验表单',
      className: 'mb-2',
      onEvent: {
        click: {
          actions: [
            {
              actionType: 'validate',
              componentId: 'search_form',
              outputVar: 'form_validate_result'
            },
            // {
            //   actionType: 'toast', // 执行toast提示动作
            //   args: {
            //     // 动作参数
            //     msgType: 'info',
            //     msg: '${event.data.form_validate_result|json}'
            //   },
            //   expression: 'event.data.form_validate_result.error === ""'
            // },
            {
              actionType: 'setValue',
              componentId: 'subpage',
              args: {
                value: {aaa: '${event.data.form_validate_result.payload}'}
              },
              expression: 'event.data.form_validate_result.error === ""'
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
        {
          type: 'input-date-range',
          name: 'dateRange',
          label: '日期范围',
          value: 'today,today'
        },
        {
          label: 'Name',
          type: 'input-text',
          name: 'name',
          required: true,
          value: 'rick'
        },
        {
          label: 'Email',
          type: 'input-email',
          placeholder: '请输入邮箱地址',
          name: 'email',
          value: 'rick@gmail.com'
        },
        {
          label: '群区域范围',
          type: 'tabs-transfer-picker',
          name: 'activityTargetList',
          id: 'activityTargetList',
          value: [],
          sortable: true,
          selectMode: 'tree',
          pickerSize: 'md',
          labelField: 'targetName',
          valueField: 'targetId',
          joinValues: false,
          multiple: true,
          autoCheckChildren: false,
          searchResultMode: 'tree',
          initiallyOpen: false,
          options: [
            {
              label: '大小区门店',
              selectMode: 'tree',
              searchable: true,
              initiallyOpen: false,
              children: [
                {
                  targetId: 'A',
                  targetName: 'A',
                  targetAliasName: null,
                  targetType: 0,
                  children: [
                    {
                      targetId: 'A1',
                      targetName: 'A1',
                      targetAliasName: null,
                      targetType: 1,
                      children: [
                        {
                          targetId: '808',
                          targetName: '808',
                          targetAliasName: '沃尔玛购物广场大连安盛店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '811',
                          targetName: '811',
                          targetAliasName: '沃尔玛购物广场大连学苑店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '812',
                          targetName: '812',
                          targetAliasName: '沃尔玛购物广场大连旅顺店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1008',
                          targetName: '1008',
                          targetAliasName: '沃尔玛购物广场大连新天地广场店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1301',
                          targetName: '1301',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2012',
                          targetName: '2012',
                          targetAliasName: '沃尔玛购物广场长春临河街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2067',
                          targetName: '2067',
                          targetAliasName: '沃尔玛购物广场沈阳长青店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2127',
                          targetName: '2127',
                          targetAliasName: '沃尔玛购物广场包头文化路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2141',
                          targetName: '2141',
                          targetAliasName: '沃尔玛购物广场大连周水前店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2397',
                          targetName: '2397',
                          targetAliasName: '沃尔玛购物广场大连金州五一路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2440',
                          targetName: '2440',
                          targetAliasName: '沃尔玛购物广场长春博学路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2470',
                          targetName: '2470',
                          targetAliasName: '沃尔玛购物广场赤峰玉龙大街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3407',
                          targetName: '3407',
                          targetAliasName: '沃尔玛购物广场大连奥林匹克广场店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3414',
                          targetName: '3414',
                          targetAliasName: '沃尔玛购物广场大连华南店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5212',
                          targetName: '5212',
                          targetAliasName: '沃尔玛跨境一件代发店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5216',
                          targetName: '5216',
                          targetAliasName: '沃尔玛厂直门店1',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5780',
                          targetName: '5780',
                          targetAliasName: '沃尔玛购物广场沈阳太原街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '7777',
                          targetName: '7777',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '9635',
                          targetName: '9635',
                          targetAliasName: '沃尔玛跨境店',
                          targetType: 2,
                          children: null
                        }
                      ]
                    },
                    {
                      targetId: 'A2',
                      targetName: 'A2',
                      targetAliasName: null,
                      targetType: 1,
                      children: [
                        {
                          targetId: '804',
                          targetName: '804',
                          targetAliasName: '沃尔玛购物广场北京五棵松店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1010',
                          targetName: '1010',
                          targetAliasName: '沃尔玛购物广场太原长风街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1026',
                          targetName: '1026',
                          targetAliasName: '沃尔玛购物广场西安金花南路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1077',
                          targetName: '1077',
                          targetAliasName: '沃尔玛购物广场廊坊朝阳店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1079',
                          targetName: '1079',
                          targetAliasName: '沃尔玛购物广场大同永泰店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1112',
                          targetName: '1112',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2005',
                          targetName: '2005',
                          targetAliasName: '沃尔玛购物广场阳泉桃北东路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2022',
                          targetName: '2022',
                          targetAliasName: '沃尔玛购物广场安阳人民大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2028',
                          targetName: '2028',
                          targetAliasName: '沃尔玛购物广场北京昌平东关店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2044',
                          targetName: '2044',
                          targetAliasName: '沃尔玛购物广场西安雁塔路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2068',
                          targetName: '2068',
                          targetAliasName: '沃尔玛购物广场延庆妫水北街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2080',
                          targetName: '2080',
                          targetAliasName: '沃尔玛购物广场运城河东东街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2116',
                          targetName: '2116',
                          targetAliasName: '沃尔玛购物广场保定朝阳大街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2154',
                          targetName: '2154',
                          targetAliasName: '沃尔玛购物广场信阳人民路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2168',
                          targetName: '2168',
                          targetAliasName: '沃尔玛购物广场邯郸东柳大街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2369',
                          targetName: '2369',
                          targetAliasName: '沃尔玛购物广场邢台中兴东大街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2379',
                          targetName: '2379',
                          targetAliasName: '沃尔玛购物广场郑州中原西路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2414',
                          targetName: '2414',
                          targetAliasName: '沃尔玛购物广场三河燕郊神威北路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2533',
                          targetName: '2533',
                          targetAliasName: '沃尔玛购物广场晋中安宁街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2712',
                          targetName: '2712',
                          targetAliasName: '沃尔玛购物广场武清泉州路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2784',
                          targetName: '2784',
                          targetAliasName: '沃尔玛购物广场北京清河店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3421',
                          targetName: '3421',
                          targetAliasName: '沃尔玛购物广场天津新开路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3423',
                          targetName: '3423',
                          targetAliasName: '沃尔玛购物广场北京宣武门店',
                          targetType: 2,
                          children: null
                        }
                      ]
                    }
                  ]
                },
                {
                  targetId: 'B',
                  targetName: 'B',
                  targetAliasName: null,
                  targetType: 0,
                  children: [
                    {
                      targetId: 'B10',
                      targetName: 'B10',
                      targetAliasName: null,
                      targetType: 1,
                      children: [
                        {
                          targetId: '1038',
                          targetName: '1038',
                          targetAliasName: '沃尔玛购物广场惠州崇雅店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1070',
                          targetName: '1070',
                          targetAliasName: '沃尔玛购物广场惠州演达路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1094',
                          targetName: '1094',
                          targetAliasName: '沃尔玛购物广场深圳新安罗田店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2027',
                          targetName: '2027',
                          targetAliasName: '沃尔玛购物广场深圳宝安金海路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2179',
                          targetName: '2179',
                          targetAliasName: '沃尔玛购物广场深圳宝安沙井店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2232',
                          targetName: '2232',
                          targetAliasName: '沃尔玛购物广场惠州文明一路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2340',
                          targetName: '2340',
                          targetAliasName: '沃尔玛购物广场惠州鹅岭西路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2463',
                          targetName: '2463',
                          targetAliasName: '沃尔玛购物广场惠州澳头店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2497',
                          targetName: '2497',
                          targetAliasName: '沃尔玛购物广场惠州仲恺大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2506',
                          targetName: '2506',
                          targetAliasName: '沃尔玛购物广场松岗东方大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2555',
                          targetName: '2555',
                          targetAliasName: '沃尔玛购物广场宝安新安路分店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2743',
                          targetName: '2743',
                          targetAliasName: '沃尔玛购物广场惠州西南大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3404',
                          targetName: '3404',
                          targetAliasName: '沃尔玛购物广场深圳蛇口店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3409',
                          targetName: '3409',
                          targetAliasName: '沃尔玛购物广场深圳华侨城店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3432',
                          targetName: '3432',
                          targetAliasName: '沃尔玛购物广场深圳西乡前进路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5209',
                          targetName: '5209',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        }
                      ]
                    },
                    {
                      targetId: 'B11',
                      targetName: 'B11',
                      targetAliasName: null,
                      targetType: 1,
                      children: [
                        {
                          targetId: '107',
                          targetName: '107',
                          targetAliasName: '沃尔玛购物广场深圳红岭店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '119',
                          targetName: '119',
                          targetAliasName: '沃尔玛购物广场深圳翠竹店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1043',
                          targetName: '1043',
                          targetAliasName: '沃尔玛购物广场龙岗龙平东路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1056',
                          targetName: '1056',
                          targetAliasName: '沃尔玛购物广场深圳燕南路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2160',
                          targetName: '2160',
                          targetAliasName: '沃尔玛购物广场清远先锋东路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2186',
                          targetName: '2186',
                          targetAliasName: '沃尔玛购物广场深圳龙华人民南路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2447',
                          targetName: '2447',
                          targetAliasName: '沃尔玛购物广场深圳横岗西店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2489',
                          targetName: '2489',
                          targetAliasName: '沃尔玛购物广场深圳龙岗峦山谷店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2493',
                          targetName: '2493',
                          targetAliasName: '沃尔玛购物广场深圳龙岗建设路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2502',
                          targetName: '2502',
                          targetAliasName: '沃尔玛购物广场深圳布吉锦龙路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2586',
                          targetName: '2586',
                          targetAliasName: '沃尔玛购物广场横岗保康路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2733',
                          targetName: '2733',
                          targetAliasName: '沃尔玛购物广场深圳坪地龙岗大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2735',
                          targetName: '2735',
                          targetAliasName: '沃尔玛购物广场深圳光明长升路分店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3402',
                          targetName: '3402',
                          targetAliasName: '沃尔玛购物广场深圳中山店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3403',
                          targetName: '3403',
                          targetAliasName: '沃尔玛购物广场深圳福星店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5824',
                          targetName: '5824',
                          targetAliasName: '沃尔玛购物广场深圳布吉大芬店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '8888',
                          targetName: '8888',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        }
                      ]
                    }
                  ]
                }
              ],
              autoCheckChildren: false
            },
            {
              label: '省市',
              selectMode: 'tree',
              searchable: true,
              children: [
                {
                  targetId: '110000',
                  targetName: '北京',
                  targetAliasName: null,
                  targetType: 4,
                  children: [
                    {
                      targetId: '110100',
                      targetName: '北京',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    }
                  ]
                },
                {
                  targetId: '120000',
                  targetName: '天津',
                  targetAliasName: null,
                  targetType: 4,
                  children: [
                    {
                      targetId: '120100',
                      targetName: '天津',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    }
                  ]
                },
                {
                  targetId: '130000',
                  targetName: '河北',
                  targetAliasName: null,
                  targetType: 4,
                  children: [
                    {
                      targetId: '130100',
                      targetName: '石家庄',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130200',
                      targetName: '唐山',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130300',
                      targetName: '秦皇岛',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130400',
                      targetName: '邯郸',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130500',
                      targetName: '邢台',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130600',
                      targetName: '保定',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130700',
                      targetName: '张家口',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130800',
                      targetName: '承德',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130900',
                      targetName: '沧州',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '131000',
                      targetName: '廊坊',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '131100',
                      targetName: '衡水',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    }
                  ]
                }
              ],
              autoCheckChildren: null
            }
          ],
          menuTpl: '${targetType==="2"?`${targetId}`:targetName}',
          // menuTpl:
          //   "<div class='flex justify-between'><span>${label}</span>${email ? `<div class='text-muted m-r-xs text-sm text-right'>${email}<br />${phone}</div>`: ''}</div>",
          valueTpl: '${targetType==="2"?targetId:targetName}'
        },
        {
          label: 'transfer-picker',
          type: 'transfer-picker',
          name: 'transfer-picker',
          selectMode: 'list',
          pickerSize: 'md',
          joinValues: false,
          extractValue: false,
          placeholder: '请输入邮箱地址',
          source: '/api/mock2/options/transfer?page=${page}&perPage=${perPage}',
          searchable: true,
          pagination: {
            enable: true,
            layout: ['pager', 'perpage', 'total'],
            popOverContainerSelector: '.cxd-Modal'
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
              items: function (v) {
                console.log(v);
                return v.items;
                debugger;
              }
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
        },
        {
          label: '群区域范围(单树)',
          type: 'tabs-transfer-picker',
          name: 'activityTargetList',
          id: 'activityTargetList',
          value: [],
          sortable: true,
          selectMode: 'tree',
          pickerSize: 'md',
          labelField: 'targetName',
          valueField: 'targetId',
          joinValues: false,
          multiple: true,
          autoCheckChildren: false,
          searchResultMode: 'tree',
          initiallyOpen: false,
          options: [
            {
              label: '大小区门店',
              selectMode: 'tree',
              searchable: true,
              initiallyOpen: false,
              children: [
                {
                  targetId: 'A',
                  targetName: 'A',
                  targetAliasName: null,
                  targetType: 0,
                  children: [
                    {
                      targetId: 'A1',
                      targetName: 'A1',
                      targetAliasName: null,
                      targetType: 1,
                      children: [
                        {
                          targetId: '808',
                          targetName: '808',
                          targetAliasName: '沃尔玛购物广场大连安盛店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '811',
                          targetName: '811',
                          targetAliasName: '沃尔玛购物广场大连学苑店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '812',
                          targetName: '812',
                          targetAliasName: '沃尔玛购物广场大连旅顺店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1008',
                          targetName: '1008',
                          targetAliasName: '沃尔玛购物广场大连新天地广场店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1301',
                          targetName: '1301',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2012',
                          targetName: '2012',
                          targetAliasName: '沃尔玛购物广场长春临河街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2067',
                          targetName: '2067',
                          targetAliasName: '沃尔玛购物广场沈阳长青店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2127',
                          targetName: '2127',
                          targetAliasName: '沃尔玛购物广场包头文化路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2141',
                          targetName: '2141',
                          targetAliasName: '沃尔玛购物广场大连周水前店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2397',
                          targetName: '2397',
                          targetAliasName: '沃尔玛购物广场大连金州五一路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2440',
                          targetName: '2440',
                          targetAliasName: '沃尔玛购物广场长春博学路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2470',
                          targetName: '2470',
                          targetAliasName: '沃尔玛购物广场赤峰玉龙大街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3407',
                          targetName: '3407',
                          targetAliasName: '沃尔玛购物广场大连奥林匹克广场店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3414',
                          targetName: '3414',
                          targetAliasName: '沃尔玛购物广场大连华南店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5212',
                          targetName: '5212',
                          targetAliasName: '沃尔玛跨境一件代发店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5216',
                          targetName: '5216',
                          targetAliasName: '沃尔玛厂直门店1',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5780',
                          targetName: '5780',
                          targetAliasName: '沃尔玛购物广场沈阳太原街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '7777',
                          targetName: '7777',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '9635',
                          targetName: '9635',
                          targetAliasName: '沃尔玛跨境店',
                          targetType: 2,
                          children: null
                        }
                      ]
                    },
                    {
                      targetId: 'A2',
                      targetName: 'A2',
                      targetAliasName: null,
                      targetType: 1,
                      children: [
                        {
                          targetId: '804',
                          targetName: '804',
                          targetAliasName: '沃尔玛购物广场北京五棵松店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1010',
                          targetName: '1010',
                          targetAliasName: '沃尔玛购物广场太原长风街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1026',
                          targetName: '1026',
                          targetAliasName: '沃尔玛购物广场西安金花南路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1077',
                          targetName: '1077',
                          targetAliasName: '沃尔玛购物广场廊坊朝阳店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1079',
                          targetName: '1079',
                          targetAliasName: '沃尔玛购物广场大同永泰店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1112',
                          targetName: '1112',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2005',
                          targetName: '2005',
                          targetAliasName: '沃尔玛购物广场阳泉桃北东路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2022',
                          targetName: '2022',
                          targetAliasName: '沃尔玛购物广场安阳人民大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2028',
                          targetName: '2028',
                          targetAliasName: '沃尔玛购物广场北京昌平东关店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2044',
                          targetName: '2044',
                          targetAliasName: '沃尔玛购物广场西安雁塔路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2068',
                          targetName: '2068',
                          targetAliasName: '沃尔玛购物广场延庆妫水北街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2080',
                          targetName: '2080',
                          targetAliasName: '沃尔玛购物广场运城河东东街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2116',
                          targetName: '2116',
                          targetAliasName: '沃尔玛购物广场保定朝阳大街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2154',
                          targetName: '2154',
                          targetAliasName: '沃尔玛购物广场信阳人民路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2168',
                          targetName: '2168',
                          targetAliasName: '沃尔玛购物广场邯郸东柳大街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2369',
                          targetName: '2369',
                          targetAliasName: '沃尔玛购物广场邢台中兴东大街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2379',
                          targetName: '2379',
                          targetAliasName: '沃尔玛购物广场郑州中原西路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2414',
                          targetName: '2414',
                          targetAliasName: '沃尔玛购物广场三河燕郊神威北路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2533',
                          targetName: '2533',
                          targetAliasName: '沃尔玛购物广场晋中安宁街店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2712',
                          targetName: '2712',
                          targetAliasName: '沃尔玛购物广场武清泉州路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2784',
                          targetName: '2784',
                          targetAliasName: '沃尔玛购物广场北京清河店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3421',
                          targetName: '3421',
                          targetAliasName: '沃尔玛购物广场天津新开路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3423',
                          targetName: '3423',
                          targetAliasName: '沃尔玛购物广场北京宣武门店',
                          targetType: 2,
                          children: null
                        }
                      ]
                    }
                  ]
                },
                {
                  targetId: 'B',
                  targetName: 'B',
                  targetAliasName: null,
                  targetType: 0,
                  children: [
                    {
                      targetId: 'B10',
                      targetName: 'B10',
                      targetAliasName: null,
                      targetType: 1,
                      children: [
                        {
                          targetId: '1038',
                          targetName: '1038',
                          targetAliasName: '沃尔玛购物广场惠州崇雅店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1070',
                          targetName: '1070',
                          targetAliasName: '沃尔玛购物广场惠州演达路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1094',
                          targetName: '1094',
                          targetAliasName: '沃尔玛购物广场深圳新安罗田店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2027',
                          targetName: '2027',
                          targetAliasName: '沃尔玛购物广场深圳宝安金海路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2179',
                          targetName: '2179',
                          targetAliasName: '沃尔玛购物广场深圳宝安沙井店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2232',
                          targetName: '2232',
                          targetAliasName: '沃尔玛购物广场惠州文明一路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2340',
                          targetName: '2340',
                          targetAliasName: '沃尔玛购物广场惠州鹅岭西路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2463',
                          targetName: '2463',
                          targetAliasName: '沃尔玛购物广场惠州澳头店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2497',
                          targetName: '2497',
                          targetAliasName: '沃尔玛购物广场惠州仲恺大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2506',
                          targetName: '2506',
                          targetAliasName: '沃尔玛购物广场松岗东方大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2555',
                          targetName: '2555',
                          targetAliasName: '沃尔玛购物广场宝安新安路分店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2743',
                          targetName: '2743',
                          targetAliasName: '沃尔玛购物广场惠州西南大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3404',
                          targetName: '3404',
                          targetAliasName: '沃尔玛购物广场深圳蛇口店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3409',
                          targetName: '3409',
                          targetAliasName: '沃尔玛购物广场深圳华侨城店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3432',
                          targetName: '3432',
                          targetAliasName: '沃尔玛购物广场深圳西乡前进路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5209',
                          targetName: '5209',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        }
                      ]
                    },
                    {
                      targetId: 'B11',
                      targetName: 'B11',
                      targetAliasName: null,
                      targetType: 1,
                      children: [
                        {
                          targetId: '107',
                          targetName: '107',
                          targetAliasName: '沃尔玛购物广场深圳红岭店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '119',
                          targetName: '119',
                          targetAliasName: '沃尔玛购物广场深圳翠竹店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1043',
                          targetName: '1043',
                          targetAliasName: '沃尔玛购物广场龙岗龙平东路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '1056',
                          targetName: '1056',
                          targetAliasName: '沃尔玛购物广场深圳燕南路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2160',
                          targetName: '2160',
                          targetAliasName: '沃尔玛购物广场清远先锋东路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2186',
                          targetName: '2186',
                          targetAliasName: '沃尔玛购物广场深圳龙华人民南路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2447',
                          targetName: '2447',
                          targetAliasName: '沃尔玛购物广场深圳横岗西店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2489',
                          targetName: '2489',
                          targetAliasName: '沃尔玛购物广场深圳龙岗峦山谷店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2493',
                          targetName: '2493',
                          targetAliasName: '沃尔玛购物广场深圳龙岗建设路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2502',
                          targetName: '2502',
                          targetAliasName: '沃尔玛购物广场深圳布吉锦龙路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2586',
                          targetName: '2586',
                          targetAliasName: '沃尔玛购物广场横岗保康路店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2733',
                          targetName: '2733',
                          targetAliasName: '沃尔玛购物广场深圳坪地龙岗大道店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '2735',
                          targetName: '2735',
                          targetAliasName: '沃尔玛购物广场深圳光明长升路分店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3402',
                          targetName: '3402',
                          targetAliasName: '沃尔玛购物广场深圳中山店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '3403',
                          targetName: '3403',
                          targetAliasName: '沃尔玛购物广场深圳福星店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '5824',
                          targetName: '5824',
                          targetAliasName: '沃尔玛购物广场深圳布吉大芬店',
                          targetType: 2,
                          children: null
                        },
                        {
                          targetId: '8888',
                          targetName: '8888',
                          targetAliasName: null,
                          targetType: 2,
                          children: null
                        }
                      ]
                    }
                  ]
                }
              ],
              autoCheckChildren: false
            },
            {
              label: '省市',
              selectMode: 'tree',
              searchable: true,
              children: [
                {
                  targetId: '110000',
                  targetName: '北京',
                  targetAliasName: null,
                  targetType: 4,
                  children: [
                    {
                      targetId: '110100',
                      targetName: '北京',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    }
                  ]
                },
                {
                  targetId: '120000',
                  targetName: '天津',
                  targetAliasName: null,
                  targetType: 4,
                  children: [
                    {
                      targetId: '120100',
                      targetName: '天津',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    }
                  ]
                },
                {
                  targetId: '130000',
                  targetName: '河北',
                  targetAliasName: null,
                  targetType: 4,
                  children: [
                    {
                      targetId: '130100',
                      targetName: '石家庄',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130200',
                      targetName: '唐山',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130300',
                      targetName: '秦皇岛',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130400',
                      targetName: '邯郸',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130500',
                      targetName: '邢台',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130600',
                      targetName: '保定',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130700',
                      targetName: '张家口',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130800',
                      targetName: '承德',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '130900',
                      targetName: '沧州',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '131000',
                      targetName: '廊坊',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    },
                    {
                      targetId: '131100',
                      targetName: '衡水',
                      targetAliasName: null,
                      targetType: 5,
                      children: null
                    }
                  ]
                }
              ],
              autoCheckChildren: null
            }
          ],
          menuTpl: '${targetType==="2"?`${targetId}`:targetName}',
          // menuTpl:
          //   "<div class='flex justify-between'><span>${label}</span>${email ? `<div class='text-muted m-r-xs text-sm text-right'>${email}<br />${phone}</div>`: ''}</div>",
          valueTpl: '${targetType==="2"?targetId:targetName}'
        },
        {
          label: '树型展示',
          type: 'transfer',
          name: 'transfer4',
          selectMode: 'tree',
          searchable: true,
          multiple: true,
          autoCheckChildren: false,
          options: [
            {
              label: '法师1',
              value: 'fashi1',
              children: [
                {
                  label: '诸葛亮',
                  value: 'zhugeliang'
                }
              ]
            },
            {
              label: '战士',
              value: 'zhanshi',
              children: [
                {
                  label: '曹操',
                  value: 'caocao'
                },
                {
                  label: '钟无艳',
                  value: 'zhongwuyan'
                }
              ]
            }
          ]
        },
        {
          label: '树型展示',
          type: 'transfer-picker',
          name: 'transfer5',
          selectMode: 'tree',
          searchable: true,
          multiple: true,
          autoCheckChildren: false,
          options: [
            {
              label: '法师1',
              value: 'fashi1',
              children: [
                {
                  label: '诸葛亮',
                  value: 'zhugeliang'
                }
              ]
            },
            {
              label: '战士',
              value: 'zhanshi',
              children: [
                {
                  label: '曹操',
                  value: 'caocao'
                },
                {
                  label: '钟无艳',
                  value: 'zhongwuyan'
                }
              ]
            }
          ]
        }
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
                },
                {
                  actionType: 'submit',
                  componentId: 'search_form'
                }
              ]
            }
          }
        }
      ],
      onEvent: {
        submit: {
          actions: [
            {
              actionType: 'toast', // 执行toast提示动作
              args: {
                // 动作参数
                msgType: 'info',
                msg: 'submit事件'
              }
            },
            {
              actionType: 'validate',
              componentId: 'search_form'
              // outputVar: 'form_validate_result'
            },
            // {
            //   actionType: 'toast', // 执行toast提示动作
            //   args: {
            //     // 动作参数
            //     msgType: 'info',
            //     msg: '${event.data.validateResult|json}'
            //   }
            // },
            // {
            //   actionType: 'validate',
            //   componentId: 'search_form',
            //   outputVar: 'form_validate_result'
            // },
            {
              actionType: 'setValue',
              componentId: 'subpage',
              args: {
                value: {aaa: '${event.data.validateResult.payload}'}
              },
              expression: 'event.data.validateResult.error === ""'
            }
          ]
        },
        validate: [
          {
            actionType: 'toast', // 执行toast提示动作
            args: {
              // 动作参数
              msgType: 'info',
              msg: '${event.data}'
            }
          }
        ]
      }
    },
    {
      type: 'Service',
      id: 'subpage',
      body: [
        {
          type: 'form',
          mode: 'horizontal',
          id: 'showBoard',
          body: [
            {
              type: 'static',
              label: 'dateRange',
              value: '${aaa.dateRange}'
            },
            {
              type: 'static',
              label: 'name',
              value: '${aaa.name}'
            },
            {
              type: 'static',
              label: 'email',
              value: '${aaa.email}'
            }
          ]
        }
      ]
    }
  ]
};
