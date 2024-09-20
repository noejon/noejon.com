TIL

Copying a git repo

```zsh
git clone --bare git@github.com:noejon/tech-challenges.git
```

This will create a `tech-challenges.git` folder. Change directory to this newly created folder:

```zsh
cd tech-challenges.git
```

If you wanna check what branches there are you can run:

```zsh
git branch -a
```

I had a few branches that I did not need. To remove them run:

```zsh
git branch -D <branch_name> <branch_name_2>
```

Now let's push the code to the new repository:

```zsh
git push --mirror git@github.com:noejon/challenge-checkbox-ai.git
```

Now you can delete the bare repository:

```zsh
cd ..
rm -rf tech-challenges.git
```
