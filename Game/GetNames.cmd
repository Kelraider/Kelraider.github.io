dir *.pde /b > temp.txt
(for /f "delims=" %%i in (temp.txt) do @echo Game\%%i)>filenames.txt
del temp.txt