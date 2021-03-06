# Data Science Image
Dockerfile containing lots of tools for Data Science

## Run
```
docker run --rm -i -t 
  -p 8888:8888
  -p 8889:8889 
  -p 8787:8787 
  -p 2222:22
  -p 9001:9001
  -v "${pwd}:/data/" 
  --name dsdocker 
  floriangeigl/datascience /bin/bash
```

## Ports
After starting the container you should be able to access jupyter (python 3, julia & R) over [http://localhost:8888](http://localhost:8888) (jupyter labs runs on 8889). Furthermore, you can access an r-studio-server at [http://localhost:8787](http://localhost:8787). Supervisord webservice (service status; restart services; logs; ...) on 9001. If you want to ssh into the container simply use port 2222.

## Credentials
### SSh credentials
root:datascience

## Tips & Tricks

### Windows Shortcut
Open a powershell and open your profile-file using the follwing command.
```
notepad $PROFILE
```
paste the following lines into the notepad and save the file.
```
function dsdocker {
docker run --rm -i -t -p 8888:8888 -p 8889:8889 -p 8787:8787 -p 2222:22 -p 9001:9001 -v "${pwd}:/data" --name dsdocker floriangeigl/datascience /bin/bash
}
```
### Linux Shortcut
Add an alias with the following command (notice the differnce with pwd)
```
dsdocker='docker run --rm -it -p 8888:8888 -p 8889:8889 -p 8787:8787 -p 2222:22 -p 9001:9001 -v $(pwd):/data --name dsdocker floriangeigl/datascience /bin/bash'
```
### Cygwin Shortcut
dsdocker='docker run --rm -it -p 8888:8888 -p 8889:8889 -p 8787:8787 -p 2222:22 -p 9001:9001 -v $(cygpath -aw $(pwd)):/data --name dsdocker floriangeigl/datascience /bin/bash'


No you can simple fire up a Data Science container by typing ```dsdocker``` in your powershell. This will also mount the working directory into /data/ in the docker container.
