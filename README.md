# NHiL


## How to get setup


### Run these commands in your terminal

This will pull the docker application into your system

```
docker pull kodmeron/crackend

```

This will run the docker application on your localhost at port 8080

```
docker run --rm -p 8080:3000 kodmeron/crackend
```

Then you are done and ready, you into your browser and open up
[localhost:8080]

## You can also open docker with the image ID, to do that:
run 
```
docker images 
```
to find the Image ID and then write
```
docker run --rm -p 8080:3000 ImageID
```
