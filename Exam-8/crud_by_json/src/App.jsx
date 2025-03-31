import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRecipes, getRecipes } from './redux/Action'
import Card from './components/Card'



const App = () => {
  const { recipeBook, isLoading } = useSelector((store) => store.recipeBook)
  console.log(recipeBook);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])
  const onDelete = (id) => {
    dispatch(deleteRecipes(id))
  }
  return (
    <div>
      {
        isLoading ? <h1>Loading........</h1> :
          recipeBook.map((recipeBook, index) => <Card  {...recipeBook} index={index} onDelete={onDelete} />)
      }
    </div>
  )
}

export default App
