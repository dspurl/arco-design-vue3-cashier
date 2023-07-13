import Mock from 'mockjs';

import './user';
import './message-box';

import '@/views/dashboard/mock';
import '@/views/indent/mock';

Mock.setup({
  timeout: '600-1000',
});
