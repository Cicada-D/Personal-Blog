type Name = string
type Href = string
type Describe = string
type Num = number
type Icon = string

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
