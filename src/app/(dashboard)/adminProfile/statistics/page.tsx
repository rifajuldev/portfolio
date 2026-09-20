'use client'
import StatisticsForm from '@/components/forms/StatisticsForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteStat } from '@/lib/actions/statistics.action'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { FaRegEdit } from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

const AdminStatistics = () => {
  const { statistics, fetchStatistics } = useAppContext()

  const handleDelete = async (id: string) => {
    await deleteStat({ statId: id })

    await fetchStatistics()
    toast.success('Statistics Deleted successfully')
  }

  return (
    <DashboardPageLayout title="Statistics">
      <div className="mb-12">
        <h1 className="form-heading">Create New Technology</h1>
        <StatisticsForm type="Create" />
      </div>

      <div className="mb-12">
        <h1 className="form-heading">All Statistics</h1>

        <div className="form-container">
          {statistics.map(({ _id, stats_title, icon_name, count }) => {
            const IconComponent = RiIcons[icon_name as keyof typeof RiIcons]

            return (
              <div
                key={_id}
                className="bg-bg-3 border-border-1 relative h-full rounded-md border px-[35px] pt-[70px] pb-[35px] lg:px-[42px] lg:pt-[93px] lg:pb-[42px]"
              >
                {IconComponent ? <IconComponent className="text-primary-2 h-6 w-6" /> : null}

                <h6 className="my-4 text-[20px] leading-tight font-medium">{stats_title}</h6>

                <span>Count: {count}</span>

                {/* Edit and Delete Buttons */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4">
                  <div className="flex gap-4 rounded-sm shadow-sm transition-all">
                    <Link href={`/adminProfile/statistics/${_id}`} className="text-neutral-0 hover:text-primary-2">
                      <FaRegEdit size={22} />
                    </Link>

                    <DeleteConfirmation
                      onConfirm={() => handleDelete(_id)}
                      title="Are you sure you want to delete this experience?"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </DashboardPageLayout>
  )
}

export default AdminStatistics
