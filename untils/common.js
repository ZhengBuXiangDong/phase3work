/**
 * 将HTTP协议重定向到HTTPS协议。
 */ 
const httpsRedirect = () => {
  if (location.protocol !== 'https:')
    location.replace('https://' + location.href.split('//')[1]);
};

/**
 * 以数字形式输入值。
 */
const getNumInput = (selectorl) => {
  const numInput = document.querySelector(selectorl);
  return numInput.valueAsNumber;
}

/**
 * 处理外部点击
 * Node.contains()检查点击的元素是否在指定元素之外。
 * DOMContentLoaded事件侦听器确保仅在将HTML挂载到DOM后调用onClickOutside函数。
 */

const clickOutside = () => {
  const onClickOutside = (elementId, callback) => {
    const element = document.getElementById(elementId);
  
    document.addEventListener("click", (e) => {
      if (!element.contains(e.target)) callback();
    });
  };
  
  onClickOutside("red-box", () => console.log("Clicked outside red box"));
  
  document.addEventListener("DOMContentLoaded", onClickOutside);
}

/**
 * 处理滚动停止
 */
const handerScrollStop = () => {
  const onScrollStop = callback => {
    let isScrolling;
    window.addEventListener(
      'scroll',
      e => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          callback();
        }, 150);
      },
      false
    );
  };
  
  onScrollStop(() => {
    console.log('The user has stopped scrolling');
  });
}

/**
 * 检测大小写锁（CapsLock）是否开启
 * KeyboardEvent.getModifierState()用于确定用户键盘上CapsLock键的状态。
 */
const checkCaplock = (el) => {
  el.addEventListener('keyup', e => {
    msg.style = e.getModifierState('CapsLock')
      ? 'display: block'
      : 'display: none';
  });
}