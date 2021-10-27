// global variables
const bootstrapTabletWidth = 768
let minimizedState = 1
let sidebar = 0

// get a handle when page loads
window.onload = function(){
  sidebar = document.getElementById('sidebar')
}

//  for automatic toggling - feature not implemented
const mobileToggle = (width) => {
  const screenWidth = window.innerWidth
  
  // bootstrap breakpoints
  if (screenWidth <= width) 
    return true
  return false
}

// for toggling on click
const toggle = () => {
  if(minimizedState){
    sidebar.classList.remove("minimized-sidebar")
    sidebar.classList.add("maximized-sidebar")
    minimizedState = false
  } else {
    sidebar.classList.remove("maximized-sidebar")
    sidebar.classList.add("minimized-sidebar")
    minimizedState = true
  }
}

// hook up the button
const button = document.getElementById('sidebar-toggle')
button.addEventListener('click', (e) => {
  e.preventDefault() // prevent scrolling
  toggle()
  return false; // prevent scrolling
})
