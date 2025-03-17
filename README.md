## SPIKE-API

</div>

<p align="center">
<a href="##"><img title="spike-api" src="https://img.shields.io/static/v1?label=package&message=spike-api&color=red"></a>
</p>

<p align="center">
<a href="#"><img title="mengapi" src="https://img.shields.io/static/v1?label=FREE&message=spike-api&color=pink"></a>
</p>

## ```INSTALL And UNINSTALL```
> npm install spike-api
>  
> npm uninstall spike-api


## AI MENU

### ```BLACKBOX```
``` 
const spike = require('spike-api')

spike.ai.blackbox('halo')
    .then(result => {
     console.log(result)
})
```


## DOWNLOAD MENU

### ```COBALT```(error)
``` 
const spike = require('spike-api')

spike.downloaders.cobalt({
 url: "https://www.tiktok.com/@gawrgura/video/7213728634132073734",
 tiktokH265: true,
 tiktokFullAudio: true
}).then(result => {
     console.log(result)
})
```


## RELIGION MENU

### ```Alkitab```
``` 
const spike = require('spike-api')

spike.religion.alkitab.fetchChapters('tb', 'mat', 4, 4).then(result => {
     console.log(result)
})
```


## SEARCHING MENU

### ```tvOne Search```
``` 
const spike = require('spike-api')

spike.search.tvOneSearch('indonesia').then(result => {
     console.log(result)
})
```

### ```tvOne Latest```
``` 
const spike = require('spike-api')

spike.search.tvOneLatest().then(result => {
     console.log(result)
})
```

### ```Random Cerpen```
``` 
const spike = require('spike-api')

spike.search.randomCerpen().then(result => {
     console.log(result)
})
```


## TOOLS MENU

### ```TTP```
``` 
const spike = require('spike-api')

spike.tools.ttp('hello world')
    .then(result => {
     console.log(result)
})
```

### ```ShortUrl```
``` 
const spike = require('spike-api')

spike.tools.shortenUrl('https://github.com/kazedepid')
    .then(result => {
     console.log(result)
})
```