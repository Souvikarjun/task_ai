
import Head from "@/components/Head"
import TopBar from "@/components/TopBar"
import { Page, PageHeader, PageList, PageTitle } from "@/components/Page"
import TaskCreateButton from "@/components/TaskCreateButton"
import TaskEmptyState from "@/components/TaskEmptyState"
import TaskForm from "@/components/TaskForm"
import { useState } from "react"
import { useFetcher, useLoaderData } from "react-router"
import type { Models } from "appwrite"
import TaskCard from "@/components/TaskCard"


const InboxPage = () => {
  const fetcher = useFetcher()
  const {tasks} = useLoaderData<{tasks : Models.DocumentList<Models.Document>}>()
  const [taskFormShow, setTaskFormShow] = useState(false);
  return (
    <>
      <Head title="Inbox - Task Ai"/>

      <TopBar title="Inbox" taskCount={20}/>

      <Page>
        <PageHeader>
          <PageTitle>
            Inbox
          </PageTitle>
        </PageHeader>

        <PageList>

          {tasks.documents.map(({$id, content, completed, due_date, projectId:project}) => (
            <TaskCard key={$id} id={$id} content={content} completed={completed} dueDate={due_date} project={project}/>
          ))}

          {!taskFormShow && (
            <TaskCreateButton onClick={() => setTaskFormShow(true)}/>
          )}
          {!taskFormShow && (
            <TaskEmptyState type="inbox"/>
          )}
          {taskFormShow && (
            <TaskForm mode="create" className="mt-1" onCancle={()=> setTaskFormShow(false)} onSubmit={(formdata) => {
              fetcher.submit(JSON.stringify(formdata),{
                action: '/app',
                method: 'POST',
                encType: 'application/json',
              })
              setTaskFormShow(false)
            }} />
          )}
          

        </PageList>
      </Page>
      
    </>
  )
}

export default InboxPage