// Import only the Bootstrap components we need
import Alert from 'bootstrap/js/dist/alert'
import Button from 'bootstrap/js/dist/button'
import Carousel from 'bootstrap/js/dist/carousel'
import Collapse from 'bootstrap/js/dist/collapse'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import Popover from 'bootstrap/js/dist/popover'
import ScrollSpy from 'bootstrap/js/dist/scrollspy'
import Tab from 'bootstrap/js/dist/tab'
import Toast from 'bootstrap/js/dist/toast'
import Tooltip from 'bootstrap/js/dist/tooltip'

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => new Popover(popover))
// Create an example offcanvas
document.querySelectorAll('[data-bs-toggle="offcanvas"]').forEach(offcanvas => new Offcanvas(offcanvas))
// Create an example dropdown
document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(dropdown => new Dropdown(dropdown))
