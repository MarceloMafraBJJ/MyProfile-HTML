const LinksSocialMedia = {
  github: 'marcelomafrabjj',
  youtube: 'https://youtube.com/channel/UCPpvu9UxHSIvmrzQV_v55Tg',
  facebook: 'profile.php?id=100010806556132',
  instagram: 'marcelomafrabjj',
  twitter: 'mafrabjj_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

/* function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

   fetch(url)
   .then(response => response.json())
   .then(data => {
     userName.textContent = data.name
     userBio.textContent = data.bio  // .textContent = substituir textos
     userLink.href = data.html_url   // .href =  substituir links
     userImage.src = data.avatar_url // .src  =  substituir images
    })

}

getGitHubProfileInfos() */
