function blurInput(input){
    const idlabel = 'label-' + input.name
    const isValue = input.value !== ''

    const label = document.getElementById(idlabel)
    label.classList = isValue ? 'active' : ''
}