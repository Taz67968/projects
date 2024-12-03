fetch('https://swapi.tech/api/films')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    const title1 = document.getElementById('list1')
    const title2 = document.getElementById('list2')
    const title3 = document.getElementById('list3')
    const title4 = document.getElementById('list4')
    const title5 = document.getElementById('list5')
    const title6 = document.getElementById('list6')
    title1.innerHTML = `Film name: ${data.result[0].properties.title}`
    title2.innerHTML = `Film name: ${data.result[1].properties.title}`
    title3.innerHTML = `Film name: ${data.result[2].properties.title}`
    title4.innerHTML = `Film name: ${data.result[3].properties.title}`
    title5.innerHTML = `Film name: ${data.result[4].properties.title}`
    title6.innerHTML = `Film name: ${data.result[5].properties.title}`
  })
