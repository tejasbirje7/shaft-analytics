import {Component, OnInit} from '@angular/core'
import {getDummyModel} from '../../../../@shaft-components/data/dummy';

const getSizeFrom = (name) => {
  const trans = {
    "Small": 'sm',
    "Short": 'sh',
    "Normal": 'md',
    "Large": 'lg',
  }
  return trans[name]
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public size = 'sh'
  public model = getDummyModel()

  tableSizes = [
    {num: "Small"},
    {num: "Short", checked: true},
    {num: "Normal"},
    {num: "Large"},
  ]

  public products = [
    {content: "On Prem", id: "1"},
    {content: "Private cloud", id: "2"},
    {content: "Hybrid cloud", id: "3"},
    {content: "Platform trial", id: "4"},
  ]

  public purchased = [
    {content: "Store 1", id: "1"},
    {content: "Store 2", id: "2"},
    {content: "Store 3", id: "3"},
    {content: "Store 4", id: "4"},
  ]

  public server = [
    {content: "full l", id: "1"},
    {content: "full 2", id: "2"},
    {content: "normal", id: "3"},
    {content: "basic", id: "4"},
  ]

  public countries = [

  ]
  public usStates = []

  constructor() { }

  ngOnInit(): void {
  }

  onChange1(event) {
    const tmp = getSizeFrom(event.value)
    this.size = tmp
  }

}
