fis.config.set('namespace', '{{-app_name-}}');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

fis.config.set('deploy', {
    'dev' : {
        from: '/',
        to: '/',
        // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
        receiver: 'http://127.0.0.1:8085/yog/upload'
    }
});