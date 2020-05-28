import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'Learn ML Workbench',
    'description': 'Getting started and using our product is easy peasy!'
  };
  public videoDataSource: any = {
    'heading': 'Video Tutorials (v10.6)',
    'description': 'We are so excited and proud of our product. It is really easy to use ML Workbench.',
    'list': [
      {
        'video_url': 'https://www.youtube.com/embed/3Tqe8NlcJQg?rel=0',
        'description': 'AutoML',
        'subheading': 'Use Cases',
        'id': `3Tqe8NlcJQg`
      },
      {
        'video_url': 'https://www.youtube.com/embed/ZA_wWH5uml4?rel=0',
        'description': 'Deep Network Models',
        'subheading': 'Use Cases',
        'id': `ZA_wWH5uml4`
      },
      {
        'video_url': 'https://www.youtube.com/embed/Qswag4lTloQ?rel=0',
        'description': 'Data import from Cumulocity',
        'subheading': 'Use Cases',
        'id': `Qswag4lTloQ`
      },
      {
        'video_url': 'https://www.youtube.com/embed/ErUVW-HMS74?rel=0',
        'description': 'Jupyter Notebook',
        'subheading': 'Use Cases',
        'id': `ErUVW-HMS74`
      },
      {
        'video_url': 'https://www.youtube.com/embed/W3DPyztMaro?rel=0',
        'description': 'Python execution',
        'subheading': 'Use Cases',
        'id': `W3DPyztMaro`
      },
      {
        'video_url': 'https://www.youtube.com/embed/M7b138lHpgw?rel=0',
        'description': 'Data import from DataHub',
        'subheading': 'Use Cases',
        'id': `M7b138lHpgw`
      },
      {
        'video_url': 'https://www.youtube.com/embed/Ds9rqUSEFqE?rel=0',
        'description': 'Custom Neural Network',
        'subheading': 'Use Cases',
        'id': `Ds9rqUSEFqE`
      },
      {
        'video_url': 'https://www.youtube.com/embed/tWOoVZECnvs?rel=0',
        'description': 'WorkFlow Single Model',
        'subheading': 'Use Cases',
        'id': `tWOoVZECnvs`
      }
    ]
  };

  public videoDataSourceOld: any = {
    'heading': 'Video Tutorials (v1.38.2)',
    'description': '',
    'list': [
      {
        'video_url': 'https://www.youtube.com/embed/0SZHvRSJwyc?rel=0',
        'description': 'Distracted Driver Use Case',
        'subheading': 'Use Cases',
        'id': `0SZHvRSJwyc`
      },
      {
        'video_url': 'https://www.youtube.com/embed/6RUJ0Nk52u8?rel=0',
        'description': 'AutoML',
        'subheading': 'Use Cases',
        'id': `6RUJ0Nk52u8`
      },
      {
        'video_url': 'https://www.youtube.com/embed/_YCGPhMETF4?rel=0',
        'description': 'Import data from Cumulocity',
        'subheading': 'Use Cases',
        'id': `_YCGPhMETF4`
      },
      {
        'video_url': 'https://www.youtube.com/embed/dm98Rjb8l6w?rel=0',
        'description': 'Jupyter Notebook',
        'subheading': 'Use Cases',
        'id': `dm98Rjb8l6w`
      },
      {
        'video_url': 'https://www.youtube.com/embed/Hnu7lvcc0kc?rel=0',
        'description': 'Python Execution',
        'subheading': 'Use Cases',
        'id': `Hnu7lvcc0kc`
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
