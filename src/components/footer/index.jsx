import React  from 'react';
import Tab from '@/components/footer/children/tab';
import styls from  './index.scss';

export default function(){
  return (
    <>
      <h1 className={styls.title}>尾部footer</h1>
      <Tab/>
      <div className={styls.box}>
        <span className={styls.text}>一个人的武林</span>
      </div>
    </>
  )
}