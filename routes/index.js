
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'Waiting in Line',
        'img': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'Needfinding',
        'img': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Prototyping',
        'img': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Heuristic Evaluation',
        'img': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'Visualization',
        'img': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      },
      { 'name': 'Social design',
        'img': 'lorempixel.people.2.jpeg',
        'id': 'project6'
      },
      { 'name': 'Gestural interaction',
        'img': 'lorempixel.technics.2.jpeg',
        'id': 'project7'
      },
      { 'name': 'Design tools',
        'img': 'lorempixel.city.2.jpeg',
        'id': 'project8'
      }
    ]
  });
};