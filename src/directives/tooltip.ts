import type {Directive} from "vue";

export const tooltip: Directive<HTMLElement, string> = {
  mounted(el, binding) {
    const tooltip = document.createElement('div')
    tooltip.className = 'tooltip'
    tooltip.innerHTML = binding.value

    const rect = el.getBoundingClientRect()
    tooltip.style.top = rect.top - 30 + 'px'
    tooltip.style.left = rect.left + 'px'
    if(binding.arg) {
      tooltip.style.backgroundColor = binding.arg
    }

    if(binding.modifiers['small']) {
      tooltip.style.fontSize = '0.5rem'
    }

    document.body.appendChild(tooltip)

    el.addEventListener('mouseover', function () {
      tooltip.style.display = 'block'
    })

    el.addEventListener('mouseout', function () {
      tooltip.style.display = 'none'
    })
  }
}
