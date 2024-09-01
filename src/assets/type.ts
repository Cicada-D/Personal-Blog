type Name = string
type Href = string
type Describe = string
type Num = number
type Icon = string


// PersonalInfromation组件需要的 在pinia里面储存 
interface Alink {
    name: Name,
    href: Href
}

interface Link extends Alink{
  icon: Icon,
}

interface Tage extends Alink {
  num: Num,
}

export interface PersonalMenu {
  href: string
  name: string
  describe: Describe
  tage: Tage[]
  link: Link[]
}


// ContentNavbar组件需要， 存在pinia里面
export type ContentMenu = Name[] 
