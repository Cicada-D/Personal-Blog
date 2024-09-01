import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ContentMenu, PersonalMenu } from '../assets/type'
export const useCounterStore = defineStore('personal', () => {
  const personalMenu = ref<PersonalMenu>({
    href: '#',
    name: '知了',
    describe: '真帅！！！！！',
    tage: [
      {
        num: 123,
        name: '日志',
        href: '#'
      },
      {
        num: 34,
        name: '分类',
        href: '#'
      },
      {
        num: 21,
        name: '标签',
        href: '#'
      }
    ],
    link: [
      {
        name: 'Linkedin',
        href: '#',
        icon: '#'
      },
      {
        name: 'Twitter',
        href: '#',
        icon: '#'
      },
      {
        name: 'E-Mail',
        href: '#',
        icon: '#'
      },
      {
        name: 'S.O.',
        href: '#',
        icon: '#'
      },
      {
        name: 'RSS',
        href: '#',
        icon: '#'
      },
      {
        name: 'CSDN',
        href: '#',
        icon: '#'
      },
      {
        name: 'Creative Commons',
        href: '#',
        icon: '#'
      }
    ]
  })

  const contentMenu = ref<ContentMenu>(['文章目录', '站点概览'])

  const contentShow = ref<boolean>()

  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  function changeContentShow(data: boolean) {
      contentShow.value = data
  }

  return { personalMenu, contentMenu, contentShow, changeContentShow }
})
