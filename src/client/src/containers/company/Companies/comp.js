import React from 'react';
import {Icons} from './../../../components/Icons/iconsDashboard.tsx';
import {
  ContainerDiv,
  ButtonContainer
} from './styles';
import Tabs from '../../../components/Main/MuiHelpers/Tabs'
import {FilterComponent,LoadingContent} from '../../../components/Main/Table/comp'
import Table from './table';
import {onGetAllCompanies} from './func'

export default function Container({children}) {
    return (
      <ContainerDiv >
        {children}
      </ContainerDiv>
    );
}

Container.TableTabs =  function FilterComponentw({setSelected,selected,dataRows,setDataRows,tabsLabel,setOpen,currentUser,notification}) {

  const [loadContent, setLoadContent] = React.useState(true)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    onGetAllCompanies(currentUser.company.id,setDataRows,setLoadContent,notification)
  }, [])

  function TableContainer() {

    return (
      <Table
        selected={selected}
        setSelected={setSelected}
        loadContent={loadContent}
        dataRows={dataRows}
        search={search}
        >
      </Table>
    )
}

  return (
    <Tabs tabsLabel={tabsLabel} component={TableContainer}>
        <FilterComponent
          setLoadContent={setLoadContent}
          setSearch={setSearch}
          search={search}
          onCleanSearch={()=>setSearch('')}
        >
          <Container.AddUserButton onClick={()=>setOpen(true)}/>
        </FilterComponent>
      { loadContent ?
          <LoadingContent />
        :
          null
      }
    </Tabs>
  );
}


Container.AddUserButton =   function AddUserButton({onClick}) {

  return (
    <ButtonContainer onClick={onClick} className={'rowCenter'} >
      <Icons style={{fontSize:24,marginRight:5}} type={'Add'}/>
      <p className={'noBreakText'}>Nova Empresa</p>
    </ButtonContainer>
  )
}

