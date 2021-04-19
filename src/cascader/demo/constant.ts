import { ColumnItem } from '..';

export const columns: ColumnItem[] = [
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州',
        children: [
          {
            value: '西湖区',
            label: '西湖区',
            children: [
              {
                value: '梅灵北路',
                label: '梅灵北路',
                isLeaf: true,
              },
              {
                value: '梅灵南路',
                label: '梅灵南路',
                isLeaf: true,
              },
            ],
          },
          {
            value: '余杭区',
            label: '余杭区',
            isLeaf: true,
          },
        ],
      },
      {
        value: '温州',
        label: '温州',
        children: [
          {
            value: '鹿城区',
            label: '鹿城区',
            isLeaf: true,
          },
          {
            value: '瓯海区',
            label: '瓯海区',
            isLeaf: true,
          },
        ],
      },
    ],
  },
  {
    value: '福建',
    label: '福建',
    children: [
      {
        value: '福州',
        label: '福州',
        children: [
          {
            value: '鼓楼区',
            label: '鼓楼区',
            isLeaf: true,
          },
          {
            value: '台江区',
            label: '台江区',
            isLeaf: true,
          },
        ],
      },
      {
        value: '厦门',
        label: '厦门',
        children: [
          {
            value: '思明区',
            label: '思明区',
            isLeaf: true,
          },
          {
            value: '海沧区',
            label: '海沧区',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];
