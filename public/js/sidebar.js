const bootstrapTabletWidth = 768
let mobileState = 0
let sidebar = 0

window.onload = function(){
  sidebar = document.getElementById('sidebar')

  // set sidebar style initially
  mobileState = mobileToggle(bootstrapTabletWidth)
  toggle()
}

const mobileToggle = (width) => {
  const screenWidth = window.innerWidth
  
  // bootstrap breakpoints
  if (screenWidth <= width) 
    return true
  return false
}

const toggle = () => {
  if(mobileState){
    sidebar.classList.remove("maximized-sidebar")
    sidebar.classList.add("minimized-sidebar")
    mobileState = false
  } else {
    sidebar.classList.remove("minimized-sidebar")
    sidebar.classList.add("maximized-sidebar")
    mobileState = true
  }
}

// hook up the button
const button = document.getElementById('sidebar-toggle')
button.addEventListener('click', (e) => {
  e.preventDefault() // prevent scrolling
  toggle()
  return false; // prevent scrolling
})
