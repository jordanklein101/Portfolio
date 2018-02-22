 {

            '$lookup': {
                'from': 'provider',
                'localField': 'providerId',
                'foreignField': '_id',
                'as': 'providerIdData'
            }
        },
           {
            "$unwind": "$providerIdData"
        },
         {

            '$lookup': {
                'from': 'leads',
                'localField': '_id',
                'foreignField': 'serviceId',
                'as': 'providerServiceLeadData'
            }
        },
          {
            '$addFields': {
                'count': {'$size': '$providerServiceLeadData'}
            }
        },
        
       {
        '$group': {
            '_id': '$_id',
          'providerServiceData':  {'$first' :'$$ROOT'}
         
        }
        
     },
        
     
   
   {
       '$replaceRoot': { newRoot: "$providerServiceData"   }
   },
        {
            '$addFields': {
                'indicator': {
                    '$cond': {

                        'if': {
                            $gte: ['$count', 3]
                        },
                        'then': 'new',
                        'else': null
                    }
                }
            }
        }
        