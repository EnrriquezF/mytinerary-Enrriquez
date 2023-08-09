import React from 'react'
import Anchor from './Anchor'

export default function Nav() {
    let data =[
        {href: '/',
        content: 'Home',
        classes: 'navButton',
        icon: '',
        size: 1,
        key: "homeButton"},
        {href: '/cities',
        content: 'Cities',
        classes: 'citiesButton navButton',
        icon:'',
        size: 1,
        key: "cityButton"},
        {href: '#',
        content: 'Login',
        classes: 'loginButton navButton',
        icon: 'M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
        size: 16,
        key: "loginButton"}
    ]
  return (
    <nav className="options title col-lg-3 px3">
        {data.map(each=> <Anchor key={each.key} href={each.href} content={each.content} classes={each.classes} icon={each.icon} size={each.size} />)}
    </nav>
  )
}
