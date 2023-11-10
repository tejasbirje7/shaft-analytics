import { Component, OnInit } from '@angular/core';
import {CommonModalService} from '../../../services/providers/common-modal.service';
import {TemplateModalData} from '../../../utils/interfaces/template-interfaces';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public faq  = [
    {
      groupName: 'Products',
      children: [
        {
          title: 'Store Items',
          content: [],
          fields: { type : 'file' , mode : 'multi' },
        },
        {
          title: 'Discounted Price',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' },
        },
        {
          title: 'Brand Logo',
          content: [],
          fields: { type : 'file' , mode : 'single' },
        },
        {
          title: 'Deals',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' },
        },
        {
          title: 'Collections',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'input' , mode : 'multi' },
        },
        {
          title: 'Cart Items',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' },
        },
      ]
    },
    {
      groupName: 'Front Page',
      children: [
        {
          title: 'Category Breadcrumb Bar',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'list' , mode : 'multi' },
        },
        {
          title: 'Sub - Category Breadcrumb Bar',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'list' , mode : 'multi' }
        },
        {
          title: 'Offer Carousel',
          content: [],
          fields: { type : 'file' , mode : 'multi' },
        },
        {
          title: 'Profile Option',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'input' , mode : 'single' }
        },
        {
          title: 'Search Bar',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' }
        },
        {
          title: 'Wishlist',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' }
        },
        {
          title: 'Cart Items',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' }
        },
      ]
    },
    {
      groupName: 'Page 3',
      children: [
        {
          title: 'Breadcrumb select Items',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' },
        },
        {
          title: 'Shop By Category',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' },
        },
        {
          title: 'Footer Options',
          content: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
          fields: { type : 'radio' , mode : 'single' },
        }
      ]
    }

  ]
  public faq2 = [
    {
      groupName: 'Toolbar',
      children: [
        {
          title: 'Logo',
          content: [],
          fields: {
            type: 'file' , mode: 'single'
          }
        },
        {
          title: 'Options',
          content: [],
          fields: {
            type: 'list' , mode : 'multi'
          }
        },
        {
          title: 'About button',
          content: [],
          fields: {
            type: 'radio' , mode: 'single'
          }
        },
        {
          title: 'Contact button',
          content: [],
          fields: {
            type: 'radio' , mode: 'single'
          }
        }
      ]
    },
    {
      groupName: 'Welcome Page',
      children: [
        {
          title: 'Welcome Note',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Bulletin title 1',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Bulletin Subtitle 1',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Bulletin title 2',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Bulletin Subtitle 2',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Bulletin title 3',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Bulletin Subtitle 3',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Image',
          content: [],
          fields: { type : 'file' , mode: 'single'}
        },
        {
          title: 'Highlight Note',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Highlight-Title-1',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Highlight-Subtitle-1',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Highlight-Title-2',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Highlight-Subtitle-2',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Highlight-Title-3',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Highlight-Subtitle-3',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Highlight-Title-4',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        },
        {
          title: 'Highlight-Subtitle-4',
          content: [],
          fields: { type : 'input' , mode: 'single'}
        }
      ]
    },
    {
      groupName: 'Slider',
      children: [
        {
          title: 'Title',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
        {
          title: 'Image 1',
          content: [],
          fields: {
            type: 'file' , mode: 'single'
          }
        },
        {
          title: 'Image 2',
          content: [],
          fields: {
            type: 'file' , mode: 'single'
          }
        },
        {
          title: 'Image 3',
          content: [],
          fields: {
            type: 'file' , mode: 'single'
          }
        },
      ]
    },
    {
      groupName: 'Get in Touch',
      children: [
        {
          title: 'Email',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
        {
          title: 'Contact',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
        {
          title: 'Available Timings',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
      ]
    },
    {
      groupName: 'Footer Highlights',
      children: [
        {
          title: 'Heading',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
        {
          title: 'Product Highlights',
          content: [],
          fields: {
            type: 'list' , mode: 'multi'
          }
        },
        {
          title: 'Email',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
        {
          title: 'Contact',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
        {
          title: 'Location',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
        {
          title: 'Country',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
        {
          title: 'Currency',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        },
      ]
    },
    {
      groupName: 'Browse Menu',
      children: [
        {
          title: 'Highlight banner',
          content: [],
          fields: {
            type: 'radio' , mode: 'single'
          }
        },
        {
          title: 'Highlight text',
          content: [],
          fields: {
            type: 'input' , mode: 'single'
          }
        }
      ]
    },
    {
      groupName: 'Requirements',
      children: [
        {
          title: 'Requirement tab',
          content: [],
          fields: {
            type: 'radio' , mode: 'single'
          }
        }
      ]
    }
  ]

  constructor(
    private route : ActivatedRoute,
    private modal : CommonModalService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("Params : ",params);
    });
  }

  addTemplateComponent(fields : any,faqIndex,childIndex) {
    let modalData = {} as TemplateModalData;
    modalData.fields = fields;
    modalData.faqIndex = faqIndex;
    modalData.childIndex = childIndex;
    this.onView(modalData);
  }

  onView(modalData: TemplateModalData) {
    this.modal.addTemplateOption(modalData).afterClosed().subscribe(data => {
      console.log("Data in Modal ",data);
      //console.log(this.faq[data.modalData.faqIndex]);
      const modalData = data.modalData;
      this.faq2[modalData.faqIndex].children[modalData.childIndex].content = data.response;
      console.log(this.faq2)
    })
  }

  onOptionsSubmit() {
    console.log("FAQ : 2 ",this.faq2);
  }


}
